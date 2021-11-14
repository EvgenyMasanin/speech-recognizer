/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  DetailedHTMLProps,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'
import s from './SpinButton.module.scss'

type HTMLButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

interface SpinButtonProps {
  outlineSize?: number
  active: boolean
}

const Button: FC<HTMLButtonProps & SpinButtonProps> = ({
  children,
  className,
  active,
  outlineSize,
  ...props
}) => {
  const [classNames, setClassNames] = useState([s.container])

  useEffect(() => {
    if (active) setClassNames((classNames) => [...classNames, s.speak, s.quiet])
    else {
      clearTimeout(timer.current)
      setClassNames([s.container])
    }
  }, [active])

  const ref = useRef<HTMLDivElement>(null)
  const timer = useRef<NodeJS.Timeout>(setTimeout(() => null, 0))

  useEffect(() => {
    ref.current?.style.setProperty('--size', `${outlineSize}px`)
    clearTimeout(timer.current)
    setClassNames((classNames) => classNames.filter((cl) => cl !== s.quiet))

    timer.current = setTimeout(() => {
      ref.current?.style.setProperty('--size', `0px`)
      if (active) setClassNames((classNames) => [...classNames, s.quiet])
    }, 500)
  }, [outlineSize])

  return (
    <div ref={ref} className={classNames.join(' ')}>
      <button className={`${s.button} ${className}`} {...props}>
        {children}
      </button>
    </div>
  )
}

export default Button
