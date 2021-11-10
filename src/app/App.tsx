import React from 'react'
import './App.css'
import SpeechRecognition from 'components/SpeechRecognition/SpeechRecognition'
import Header from 'components/Header'
import Main from 'components/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <SpeechRecognition />
      </Main>
    </div>
  )
}

export default App
