import React from 'react'
import type { OptionType, Theme } from '../../types'
import { OptionButton } from './option.style'

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
  /**
   * The react-column-select theme object.
   */
  theme: Theme
}

const Option: React.FC<OptionProps> = ({
  label,
  isSelected,
  onClick,
  onDoubleClick,
  theme,
}) => {
  return (
    <OptionButton
      aria-label={label}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      onDoubleClick={onDoubleClick}
      isSelected={isSelected}
      theme={theme}
      type='button'
    >
      {label}
    </OptionButton>
  )
}

export default Option
