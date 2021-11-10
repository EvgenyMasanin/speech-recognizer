import { Recognition } from 'classes/speech-recognition/SpeechRecognition'
import { useRef, useState } from 'react'

export const useRecognition = (onRecognition: (test: string) => void) => {
  const recognizer = useRef<Recognition>(
    new Recognition('ru-RU', 'onSpeak', onRecognition)
  )

  const [isRec, setIsRec] = useState(false)

  return { recognizer: recognizer.current, isRec, setIsRec }
}
