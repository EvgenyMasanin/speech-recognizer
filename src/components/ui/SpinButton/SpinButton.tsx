import React, { DetailedHTMLProps, FC } from 'react'
import s from './SpinButton.module.css'
type HTMLButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

interface SpinButtonProps {
  isSpin?: boolean
}

const Button: FC<HTMLButtonProps & SpinButtonProps> = ({
  children,
  className,
  isSpin,
  ...props
}) => {
  return (
    <div className={`${s.container} ${isSpin && s.spin}`}>
      <button className={`${s.button} ${className}`} {...props}>
        {children}
      </button>
    </div>
  )
}

export default Button
