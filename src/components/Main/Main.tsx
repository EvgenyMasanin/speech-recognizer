import React, { FC } from 'react'
import s from './Main.module.css'
const Main: FC = ({ children }) => {
  return <main className={s.main}>{children}</main>
}

export default Main
