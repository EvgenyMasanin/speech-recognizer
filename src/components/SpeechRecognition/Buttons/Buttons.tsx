import React, { FC, useEffect, useState } from 'react'
import Button from 'components/ui/Button'
import { MdContentCopy, MdSave, MdDelete } from 'react-icons/md'
import { BsCheckLg } from 'react-icons/bs'
import { useToasts } from 'react-toast-notifications'

import s from './Buttons.module.css'

interface ButtonsProps {
  onCopy: () => void
  onSave: () => void
  onDelete: () => void
  saved: boolean
  setSaved: (p: boolean) => void
}

const Buttons: FC<ButtonsProps> = ({
  onCopy,
  onSave,
  onDelete,
  saved,
  setSaved,
}) => {
  const { addToast } = useToasts()

  const handleCopy = () => {
    onCopy()

    addToast('Скопировано', {
      appearance: 'success',
      autoDismiss: true,
      autoDismissTimeout: 3000,
    })
  }

  const handleSave = () => {
    onSave()
    setSaved(true)
  }

  const handleDelete = () => {
    onDelete()
  }

  return (
    <div className={s['buttons']}>
      <Button
        style={{ verticalAlign: 'middle' }}
        className={s.copyButton}
        onClick={handleCopy}
      >
        <MdContentCopy />
      </Button>
      <Button className={s.saveButton} onClick={handleSave} disabled={saved}>
        {saved ? <BsCheckLg /> : <MdSave />}
      </Button>
      <Button className={s.deleteButton} onClick={handleDelete}>
        <MdDelete />
      </Button>
    </div>
  )
}

export default Buttons
