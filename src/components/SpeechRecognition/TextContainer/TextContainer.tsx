import React, { FC, useEffect, useRef } from 'react'
import { useTypedDispatch, useTypedSelector } from 'hooks/redux'
import { useScroll } from 'hooks/scroll'
import { textActions } from 'store/reducers/TextSlice'
import { Recognition } from 'classes/speech-recognition/SpeechRecognition'
import TextBlock from '../TextBlock'
import s from './TextContent.module.css'

const { setCurrentText, addText, addCurrentToTexts } = textActions

interface TextContainerProps {
  recognizer: Recognition
  isRec: boolean
  setIsRec: (p: boolean) => void
}

const TextContainer: FC<TextContainerProps> = ({
  recognizer,
  isRec,
  setIsRec,
}) => {
  const {
    text: { texts, currentText },
  } = useTypedSelector((state) => ({
    text: state.textReducer,
  }))

  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (isRec) {
      if (texts[texts.length - 1] !== '') dispatch(addText(''))
      if (texts.length === 0) dispatch(addText(''))
      dispatch(setCurrentText(''))
      recognizer.startRecognition()
    } else {
      dispatch(addCurrentToTexts(currentText))
      recognizer.stopRecognition()
    }
  }, [isRec])

  const timer = useRef<NodeJS.Timeout>(setTimeout(() => null, 0))

  // useEffect(() => {
  //   clearTimeout(timer.current)
  //   timer.current = setTimeout(timeOut, 3000)

  //   function timeOut() {
  //     console.log('timeout')

  //     setIsRec(false)
  //   }
  // }, [currentText])

  const { lastTextBlock, textContainer } = useScroll([texts, currentText])

  return (
    <div ref={textContainer} className={s.textContainer}>
      {texts.length === 0 ? (
        <h1 className={s.placeHolder}>Нажмите на кнопку для начала работы.</h1>
      ) : (
        texts.map((text, i) => {
          const isLast = i === texts.length - 1

          return (
            <TextBlock
              ref={isLast ? lastTextBlock : null}
              key={i}
              text={isLast && isRec ? currentText : text}
              isRec={isLast && isRec}
            />
          )
        })
      )}
    </div>
  )
}

export default TextContainer
