import React, { DetailedHTMLProps, FC } from 'react'
import s from './Button.module.css'
type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`${s.button} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
