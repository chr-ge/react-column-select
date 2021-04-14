import React, { FC, ReactElement } from 'react'
import { Theme } from '../../types'
import { Button as StyledButton, ButtonIcon } from './button.styles'

interface ButtonProps {
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  label: string
  ariaLabel: string
  marginTop?: string
  type?: 'button' | 'reset' | 'submit'
  theme: Theme
  onClick: () => void
}

const Button: FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  label,
  ariaLabel,
  marginTop,
  type = 'button',
  onClick,
  theme,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      aria-label={ariaLabel}
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
