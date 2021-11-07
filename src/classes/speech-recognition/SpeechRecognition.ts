import { Lang, RecognizeType } from '../../types/types'

const MySpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

function capitalizeFirst(str: string) {
  return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()
}

export class Recognition {
  private isRecognize = false
  private words: string[] = ['']
  private recognition = new MySpeechRecognition()

  constructor(
    lang: Lang,
    recognizeType: RecognizeType,
    private callback: (text: string) => void
  ) {
    this.recognition.lang = lang
    this.recognition.interimResults = recognizeType === 'onSpeak'
  }

  startRecognition() {
    this.isRecognize = true

    this.recognition.onresult = (e: SpeechRecognitionEvent) => {
      const text = [...e.results]
        .map((r) => r[0])
        .map((r) => r.transcript)
        .join('')

      const lastWord = this.words.length - 1

      this.words[lastWord] = capitalizeFirst(text)

      if (e.results[0].isFinal) {
        this.words[lastWord] = this.words[lastWord] + '.'
        this.words.push('')
      }

      // работает какое-то время после очистки массива
      if (this.isRecognize) this.callback(this.words.join(' '))
    }

    this.recognition.onend = () => {
      if (this.isRecognize) this.recognition.start()
    }

    this.recognition.start()
  }

  stopRecognition() {
    this.isRecognize = false
    this.recognition.stop()
  }

  startNewText() {
    this.stopRecognition()
    this.words = ['']
  }
}