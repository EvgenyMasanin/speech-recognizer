import React, { forwardRef, memo, useEffect, useState } from 'react'
import { copy, save } from 'services/textService'
import Buttons from '../Buttons'
import { v4 as getID } from 'uuid'
import { textActions } from 'store/reducers/TextSlice'
import { Text } from 'types/Text'
import s from './TextBlock.module.css'
import { useTypedDispatch } from 'hooks/redux'

interface TextBlockProps {
  text: Text
  isRec?: boolean
}

const TextBlock = memo(
  forwardRef<HTMLDivElement, TextBlockProps>(({ text, isRec }, ref) => {
    const handleSave = () => {
      save(text)
    }
    const handleCopy = () => {
      copy(text.text)
    }

    const dispatch = useTypedDispatch()

    const handleDelete = () => {
      console.log('delete')
      dispatch(textActions.deleteText(text.id))
    }
    const [saved, setSaved] = useState(false)

    return (
      <div ref={ref} className={s['text-block']}>
        {text.text === '' || isRec ? null : (
          <Buttons
            onCopy={handleCopy}
            onSave={handleSave}
            onDelete={handleDelete}
            saved={saved}
            setSaved={setSaved}
          />
        )}
        <span className={s['text-block__text']}>{text.text}</span>
      </div>
    )
  })
)

TextBlock.displayName = 'textBlock'

export default TextBlock
