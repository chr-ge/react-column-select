import styled from '@emotion/styled'
import { Theme } from '../../types'

export const OptionButton = styled.button<{
  isSelected: boolean
  theme: Theme
}>`
  margin: 0;
  padding: 0.75rem 0.5rem;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.optionSelectedBgColor : 'transparent'};
  text-align: left;
  border: 0;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.optionHoverBgColor};
  }
`
