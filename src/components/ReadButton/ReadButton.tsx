import React from 'react'
import Button from 'components/ui/Button'
import { useTypedDispatch } from 'hooks/redux'
import { read } from 'services/textService'
import { textActions } from 'store/reducers/text.slice'

const ReadButton = () => {
  const dispatch = useTypedDispatch()

  const handleClick = () => {
    dispatch(textActions.setTexts(read()))
  }

  return (
    <Button className="" onClick={handleClick}>
      Показать сохранённые
    </Button>
  )
}

export default ReadButton
