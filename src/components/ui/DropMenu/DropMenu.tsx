/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC, ReactNode, useState } from 'react'
import Button from '../Button'
import { BsCaretDownFill } from 'react-icons/bs'
import s from './DropMenu.module.scss'

interface DropMenuProps {
  title: string
  items: ReactNode[]
}

const DropMenu: FC<DropMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <menu
      className={`${s.menuContainer} ${isOpen ? s.open : ''}`}
      onClick={handleClick}
    >
      <Button className={s.title}>
        {title} <BsCaretDownFill className={s.icon} />
      </Button>
      <ul className={s.menu}>
        {items.map((item, i) => {
          return (
            <li key={i} className={s.item}>
              {item}
            </li>
          )
        })}
      </ul>
    </menu>
  )
}

export default DropMenu
