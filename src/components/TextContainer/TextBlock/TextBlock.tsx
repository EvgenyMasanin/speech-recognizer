/* eslint-disable react/display-name */
import Button from 'components/ui/Button'
import React, { FC, forwardRef, memo, useEffect } from 'react'
import './TextBlock.css'

interface TextBlockProps {
  text: string
}

const TextBlock = memo(
  forwardRef<HTMLDivElement, TextBlockProps>(({ text }, ref) => {
    useEffect(() => {
      console.log('text', text)
    })

    const handleSave = () => {
      const texts = JSON.parse(localStorage.getItem('texts')!) as string[]
      texts.push(text)
      localStorage.setItem('texts', JSON.stringify(texts))
    }
    const handleCopy = () => {
      navigator.clipboard.writeText(text)
    }

    return (
      <div ref={ref} className="text-block">
        <div className="text-block__buttons">
          <Button className="text-block__copy-button" onClick={handleCopy}>
            Копировать
          </Button>
          <Button className="text-block__save-button" onClick={handleSave}>
            Сохранить
          </Button>
        </div>
        <span className="text-block__text">{text}</span>
      </div>
    )
  })
)

export default TextBlock
