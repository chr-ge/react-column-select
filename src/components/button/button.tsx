import React, { FC, ReactElement } from 'react'
import { Theme } from '../../types'
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
  onClick,
  theme,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      aria-label={label}
      marginTop={marginTop}
      theme={theme}
      type={type}
    >
      {leftIcon && <ButtonIcon>{leftIcon}</ButtonIcon>}
      {label}
      {rightIcon && <ButtonIcon>{rightIcon}</ButtonIcon>}
    </StyledButton>
  )
}

export default Button
