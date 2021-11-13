import React from 'react'
import HeaderUI from 'components/ui/Header'
import ReadButton from 'components/ReadButton'
import Button from 'components/ui/Button'
import { clear } from 'services/textService'
import { useTypedSelector } from 'hooks/redux'
import { MdRecordVoiceOver } from 'react-icons/md'
import DropMenu from 'components/ui/DropMenu'

const Header = () => {
  const { canWork } = useTypedSelector((state) => state.appReducer)

  return (
    <HeaderUI title="Speech recognizer" Logo={MdRecordVoiceOver}>
      {canWork && (
        <DropMenu
          title="Опции"
          items={[
            <ReadButton key="1" />,
            <Button key="2" onClick={clear}>
              Очистить сохранённые
            </Button>,
          ]}
        />
      )}
    </HeaderUI>
  )
}

export default Header
