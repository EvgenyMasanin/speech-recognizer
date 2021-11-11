import React, { FC, useEffect, useRef, useState } from 'react'
import SpinButton from 'components/ui/SpinButton'
import { FaMicrophone } from 'react-icons/fa'
import { useTypedSelector } from 'hooks/redux'

interface RecButtonProps {
  isRec: boolean
  setIsRec: (p: boolean) => void
}

const RecButton: FC<RecButtonProps> = ({ isRec, setIsRec }) => {
  const [size, setSize] = useState(0)
  const currentText = useTypedSelector((state) => state.textReducer.currentText)

  const timer = useRef<NodeJS.Timeout>(setTimeout(() => null, 0))

  useEffect(() => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setIsRec(false)
    }, 4000)

    if (currentText === '') setSize(0)
    else setSize(Math.random() * 17 + 3)
  }, [currentText])

  const handleClick = () => {
    setIsRec(!isRec)
  }

  return (
    <SpinButton
      className="button"
      active={isRec}
      outlineSize={size}
      onClick={handleClick}
    >
      <FaMicrophone fontSize="40" />
    </SpinButton>
  )
}

export default RecButton
