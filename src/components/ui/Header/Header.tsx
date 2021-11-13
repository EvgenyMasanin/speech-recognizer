import React, { FC } from 'react'
import { IconType } from 'react-icons'
import s from './Header.module.css'

interface HeaderProps {
  title: string
  Logo: IconType
}

const Header: FC<HeaderProps> = ({ title, Logo, children }) => {
  return (
    <header className={s.header}>
      <div className={s.title}>
        <Logo className={s.logo} />
        <span>{title}</span>
      </div>
      <div className={s.container}>{children}</div>
    </header>
  )
}

export default Header
