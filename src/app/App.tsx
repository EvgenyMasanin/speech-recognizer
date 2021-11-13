/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from 'Layout'
import Error from 'components/Error'
import SpeechRecognition from 'components/SpeechRecognition/SpeechRecognition'
import { useTypedDispatch, useTypedSelector } from 'hooks/redux'
import { appActions } from 'store/reducers/app.slice'
import { MySpeechRecognition } from 'classes/speech-recognition/SpeechRecognition'
import './App.css'

function App() {
  const { canWork, isChecked } = useTypedSelector((state) => state.appReducer)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (MySpeechRecognition) dispatch(appActions.setCanWork(true))
    else dispatch(appActions.setCanWork(false))
  }, [])

  return (
    <div className="App">
      {isChecked ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            {canWork ? (
              <Route index element={<SpeechRecognition />} />
            ) : (
              <Route index element={<Error />} />
            )}
          </Route>
        </Routes>
      ) : (
        <div>Проверка</div>
      )}
    </div>
  )
}

export default App
