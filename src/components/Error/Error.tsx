import React from 'react'
import s from './Error.module.scss'

const Error = () => {
  return (
    <div className={s.container}>
      К сожалению это приложение не поддерживается вашим браузером. Попробуйте{' '}
      <a
        href="https://www.google.by/chrome/"
        rel="noreferrer"
        target="_blank"
        className={s.link}
      >
        Google Chrome
      </a>
    </div>
  )
}

export default Error
