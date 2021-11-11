import ReadButton from 'components/SpeechRecognition/ReadButton'
import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <span className={s.title}>Speech recognizer</span>
      <div className={s.container}>
        <ReadButton />
      </div>
    </header>
  )
}

export default Header
