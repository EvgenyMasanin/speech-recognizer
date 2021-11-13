import React, { FC, useEffect } from 'react'
import { useTypedDispatch, useTypedSelector } from 'hooks/redux'
import { useScroll } from 'hooks/scroll'
import { textActions } from 'store/reducers/TextSlice'
import { Recognition } from 'classes/speech-recognition/SpeechRecognition'
import TextBlock from '../TextBlock'
import { v4 as getID } from 'uuid'
import s from './TextContent.module.css'

const { changeCurrentText, addText, addCurrentToTexts } = textActions

interface TextContainerProps {
  recognizer: Recognition
  isRec: boolean
}

const TextContainer: FC<TextContainerProps> = ({ recognizer, isRec }) => {
  const {
    text: { texts, currentText },
  } = useTypedSelector((state) => ({
    text: state.textReducer,
  }))

  const dispatch = useTypedDispatch()

  useEffect(() => {
    const newCurrentText = {
      id: getID(),
      text: '',
    }
    if (isRec) {
      //Maybe problem
      if (texts.length === 0 || texts[texts.length - 1].text !== '') {
        dispatch(addText(newCurrentText))
      }

      dispatch(changeCurrentText(newCurrentText))
      recognizer.startRecognition()
    } else {
      dispatch(addCurrentToTexts(currentText))
      recognizer.stopRecognition()
    }
  }, [isRec])

  const { lastTextBlock, textContainer } = useScroll(isRec, [
    texts,
    currentText,
  ])

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
              key={text.id}
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
