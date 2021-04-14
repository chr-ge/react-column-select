import React, { FC } from 'react'
import { Option as OptionType } from '../../types'
import { Row } from './option.style'

interface OptionProps {
  label: OptionType['label']
  isSelected: boolean
  onClick: () => void
  onDoubleClick: () => void
}

const Option: FC<OptionProps> = ({
  label,
  isSelected,
  onClick,
  onDoubleClick,
}) => {
  return (
    <Row
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      isSelected={isSelected}
    >
      {label}
    </Row>
  )
}

export default Option
