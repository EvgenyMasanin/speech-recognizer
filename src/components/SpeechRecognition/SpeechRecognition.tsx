import React from 'react'
import TextContainer from './TextContainer'
import RecButton from './RecButton'
import { useTypedDispatch } from 'hooks/redux'
import { textActions } from 'store/reducers/TextSlice'
import { useRecognition } from 'hooks/recognition'
import s from './speechRecognition.module.css'
import ReadButton from './ReadButton'

const { setCurrentText } = textActions

const SpeechRecognition = () => {
  const dispatch = useTypedDispatch()

  const onRecognition = (text: string) => {
    dispatch(setCurrentText(text))
  }

  const { recognizer, isRec, setIsRec } = useRecognition(onRecognition)

  return (
    <div className={s.container}>
      <TextContainer
        recognizer={recognizer}
        isRec={isRec}
        setIsRec={setIsRec}
      />
      <div className={s.buttonsContainer}>
        <div className={s.buttons}>
          <RecButton isRec={isRec} setIsRec={setIsRec} />
          <ReadButton />
        </div>
      </div>
    </div>
  )
}

export default SpeechRecognition
