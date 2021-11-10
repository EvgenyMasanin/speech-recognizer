import SpinButton from 'components/ui/SpinButton'
import React, { FC } from 'react'

interface RecButtonProps {
  isRec: boolean
  setIsRec: (p: boolean) => void
}

const RecButton: FC<RecButtonProps> = ({ isRec, setIsRec }) => {
  return (
    <SpinButton
      className="button"
      isSpin={isRec}
      onClick={() => {
        setIsRec(!isRec)
      }}
    >
      {isRec ? 'Закончить распознование' : 'Начать распознование'}
    </SpinButton>
  )
}

export default RecButton
