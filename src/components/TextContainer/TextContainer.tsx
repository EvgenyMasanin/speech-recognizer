import { Recognition } from 'classes/speech-recognition/SpeechRecognition'
import Button from 'components/ui/Button'
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import TextBlock from './TextBlock'
import s from './textContent.module.css'

const TextContainer = () => {
  const [currentText, setCurrentText] = useState<string>()
  const [texts, setTexts] = useState<string[]>([])

  const [isRec, setIsRec] = useState(false)

  const onRecognition = (text: string) => {
    setCurrentText(text)
  }

  const ref = useRef<Recognition>(
    new Recognition('ru-RU', 'onSpeak', onRecognition)
  )

  const lastTextBlock = useRef<HTMLDivElement>(null)
  const textContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentText) {
      setTexts([...texts.slice(0, texts.length - 1), currentText])
    }
  }, [currentText])

  useEffect(() => {
    if (textContainer.current) {
      textContainer.current.scrollTo(0, textContainer.current.scrollHeight)
    }
  }, [texts])

  useEffect(() => {
    console.log('rerender')
  })

  const handleClick = () => {
    if (!isRec) {
      setTexts([...texts, ''])
      ref.current.startRecognition()
    } else {
      setCurrentText('')
      ref.current.stopRecognition()
    }

    setIsRec(!isRec)
  }

  return (
    <div className={s.container}>
      <div ref={textContainer} className={s.textContainer}>
        {texts.map((text, i) => {
          return (
            <TextBlock
              ref={i === texts.length - 1 ? lastTextBlock : null}
              key={i}
              text={
                !isRec
                  ? text
                  : i === texts.length - 1
                  ? currentText || ''
                  : text
              }
            />
          )
        })}
      </div>
      <Button className="button" onClick={handleClick}>
        {isRec ? 'Закончить распознование' : 'Начать распознование'}
      </Button>
    </div>
  )
}

export default TextContainer
