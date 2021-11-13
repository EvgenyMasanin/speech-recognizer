import React from 'react'
import TextContainer from './TextContainer'
import RecButton from './RecButton'
import { useTypedDispatch, useTypedSelector } from 'hooks/redux'
import { textActions } from 'store/reducers/TextSlice'
import { useRecognition } from 'hooks/recognition'
import s from './speechRecognition.module.css'

const { setCurrentText } = textActions

const SpeechRecognition = () => {
  const { canWork, isChecked } = useTypedSelector((state) => state.appReducer)

  const dispatch = useTypedDispatch()

  const onRecognition = (text: string) => {
    dispatch(setCurrentText(text))
  }

  const { recognizer, isRec, setIsRec } = useRecognition(onRecognition)

  return (
    <div className={s.container}>
      <TextContainer recognizer={recognizer!} isRec={isRec} />
      <div className={s.buttonsContainer}>
        <RecButton isRec={isRec} setIsRec={setIsRec} />
      </div>
    </div>
  )
}

export default SpeechRecognition
