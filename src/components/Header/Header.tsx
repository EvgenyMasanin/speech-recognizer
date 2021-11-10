import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <span className={s.title}>Speech recognizer</span>
    </header>
  )
}

export default Header
