import React, { forwardRef, memo, useState } from 'react'
import { copy, save } from 'services/textService'
import Buttons from '../Buttons'
import { textActions } from 'store/reducers/text.slice'
import { Text } from 'types/Text'
import s from './TextBlock.module.css'
import { useTypedDispatch } from 'hooks/redux'

interface TextBlockProps {
  text: Text
  isRec?: boolean
}

const TextBlock = memo(
  forwardRef<HTMLLIElement, TextBlockProps>(({ text, isRec }, ref) => {
    const handleSave = () => {
      save(text)
    }
    const handleCopy = () => {
      copy(text.text)
    }

    const dispatch = useTypedDispatch()

    const handleDelete = () => {
      dispatch(textActions.deleteText(text.id))
    }
    const [saved, setSaved] = useState(false)

    return (
      <li ref={ref} className={s['text-block']}>
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
      </li>
    )
  })
)

TextBlock.displayName = 'textBlock'

export default TextBlock
