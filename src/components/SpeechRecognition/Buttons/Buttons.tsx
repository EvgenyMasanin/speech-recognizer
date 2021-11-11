import React, { FC, useState } from 'react'
import Button from 'components/ui/Button'
import { MdContentCopy, MdSave } from 'react-icons/md'
import { BsCheckLg } from 'react-icons/bs'
import { useToasts } from 'react-toast-notifications'

import s from './Buttons.module.css'

interface ButtonsProps {
  onCopy: () => void
  onSave: () => void
}

const Buttons: FC<ButtonsProps> = ({ onCopy, onSave }) => {
  const [saved, setSaved] = useState(false)

  // const { addToast } = useToasts()
  // useEffect(() => {
  //   if (error) {
  //     addToast(error, {
  //       appearance: 'error',
  //       autoDismiss: true,
  //       autoDismissTimeout: 5000,
  //     })
  //     dispatch(setError(''))
  //   }
  // }, [error])

  const handleCopy = () => {
    onCopy()
  }
  const handleSave = () => {
    onSave()
    setSaved(true)
  }
  return (
    <div className={s['text-block__buttons']}>
      <Button
        style={{ verticalAlign: 'middle' }}
        className={s['text-block__copy-button']}
        onClick={handleCopy}
      >
        <MdContentCopy />
      </Button>
      <Button
        className={s['text-block__save-button']}
        onClick={handleSave}
        disabled={saved}
      >
        {saved ? <BsCheckLg /> : <MdSave />}
      </Button>
    </div>
  )
}

export default Buttons
