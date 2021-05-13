import React, { FC } from 'react'
import { OptionType } from '../../types'
import { Row } from './option.style'

interface OptionProps {
  /**
   * The label of the option.
   */
  label: OptionType['label']
  /**
   * Whether or not the option is currently selected.
   * @type boolean
   */
  isSelected: boolean
  /**
   * The function fired by the onClick event.
   */
  onClick: () => void
  /**
   * The function fired by the onDoubleClick event.
   */
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
      aria-label={label}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      onDoubleClick={onDoubleClick}
      isSelected={isSelected}
      role='button'
    >
      {label}
    </Row>
  )
}

export default Option
