import React from 'react'
import TextContainer from './TextContainer'
import RecButton from './RecButton'
import { useTypedDispatch } from 'hooks/redux'
import { textActions } from 'store/reducers/text.slice'
import { useRecognition } from 'hooks/recognition'
import s from './speechRecognition.module.css'

const { setCurrentText } = textActions

const SpeechRecognition = () => {
  const dispatch = useTypedDispatch()

  const onRecognition = (text: string) => {
    dispatch(setCurrentText(text))
  }

  const { recognizer, isRec, setIsRec } = useRecognition(onRecognition)

  return (
    <div className={s.container}>
      <TextContainer recognizer={recognizer} isRec={isRec} />
      <div className={s.buttonsContainer}>
        <RecButton isRec={isRec} setIsRec={setIsRec} />
      </div>
    </div>
  )
}

export default SpeechRecognition
