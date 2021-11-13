import React, { FC } from 'react'
import s from './Header.module.css'

const Header: FC = ({ children }) => {
  return (
    <header className={s.header}>
      <span className={s.title}>Speech recognizer</span>
      <div className={s.container}>{children}</div>
    </header>
  )
}

export default Header
