import React, { forwardRef, memo } from 'react'
import { copy, save } from 'services/textService'
import Buttons from '../Buttons'
import s from './TextBlock.module.css'

interface TextBlockProps {
  text: string
  isRec?: boolean
}

const TextBlock = memo(
  forwardRef<HTMLDivElement, TextBlockProps>(({ text, isRec }, ref) => {
    const handleSave = () => {
      save(text)
    }
    const handleCopy = () => {
      copy(text)
    }

    return (
      <div ref={ref} className={s['text-block']}>
        {text === '' || isRec ? null : (
          <Buttons onCopy={handleCopy} onSave={handleSave} />
        )}
        <span className={s['text-block__text']}>{text}</span>
      </div>
    )
  })
)

TextBlock.displayName = 'textBlock'

export default TextBlock
