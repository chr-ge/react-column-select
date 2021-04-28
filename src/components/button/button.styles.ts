import styled from '@emotion/styled'
import { Theme } from '../../types'

export const Button = styled.button<{ marginTop?: string; theme: Theme }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  width: 100%;
  border: 0;
  transition: all 250ms;
  padding: 0.5rem 0;
  border-radius: 0.33rem;
  margin-top: ${(p) => p.marginTop};
  background-color: ${(p) => p.theme.buttonBgColor};
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.buttonBgColor}98;
  }
  
  &:disabled { 
    cursor: not-allowed;
  }
`

export const ButtonIcon = styled.div<{ margin: string }>`
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;
  margin: ${(p) => p.margin};
`
