import React, { useEffect } from 'react'
import './App.css'
import SpeechRecognition from 'components/SpeechRecognition/SpeechRecognition'
import Header from 'components/Header'
import Main from 'components/Main'
import ReadButton from 'components/ReadButton'
import Button from 'components/ui/Button'
import { clear } from 'services/textService'
import { useTypedDispatch, useTypedSelector } from 'hooks/redux'
import { Recognition } from 'classes/speech-recognition/SpeechRecognition'
import { appActions } from 'store/reducers/AppSlice'

function App() {
  const { canWork, isChecked } = useTypedSelector((state) => state.appReducer)
  const dispatch = useTypedDispatch()
  useEffect(() => {
    try {
      new Recognition('ru-RU', 'onSpeak', () => null)
      dispatch(appActions.setCanWork(true))
    } catch {
      dispatch(appActions.setCanWork(false))
    }
  }, [])

  return (
    <div className="App">
      {isChecked ? (
        canWork ? (
          <>
            <Header>
              <ReadButton />
              <Button style={{ marginLeft: 10 }} onClick={clear}>
                Очистить сохранённые
              </Button>
            </Header>
            <Main>
              <SpeechRecognition />
            </Main>
          </>
        ) : (
          <div>Не работает</div>
        )
      ) : (
        <div>Проверка</div>
      )}
    </div>
  )
}

export default App
