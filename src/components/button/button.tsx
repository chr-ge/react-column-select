import React, { FC, ReactElement } from 'react'
import type { Theme } from '../../types'
import { Button as StyledButton, ButtonIcon } from './button.styles'

interface ButtonProps {
  /**
   * If added, the button will show an icon before the button's label.
   * @type ReactElement
   */
  leftIcon?: ReactElement
  /**
   * If added, the button will show an icon after the button's label.
   * @type ReactElement
   */
  rightIcon?: ReactElement
  /**
   * The text show in the button.
   */
  label: string
  /**
   * The top margin spacing of the button.
   */
  marginTop?: string
  /**
   * The html button type to use.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
  /**
   * Is the button disabled?.
   * @default false
   */
  isDisabled?: boolean
  /**
   * The react-column-select theme object.
   */
  theme: Theme
  /**
   * The function to be fired by the button onClick event.
   */
  onClick: () => void
}

const Button: FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  label,
  marginTop,
  type = 'button',
  isDisabled,
  onClick,
  theme,
}) => {
  return (
    <StyledButton
      id={label.replace(/\W/g, '_')}
      aria-label={label}
      onClick={onClick}
      marginTop={marginTop}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      theme={theme}
      type={type}
    >
      {leftIcon && <ButtonIcon margin='0 0.25rem 0 0'>{leftIcon}</ButtonIcon>}
      {label}
      {rightIcon && <ButtonIcon margin='0 0 0 0.25rem'>{rightIcon}</ButtonIcon>}
    </StyledButton>
  )
}

export default Button
