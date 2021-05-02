import styled from '@emotion/styled'

export const Row = styled.button<{ isSelected: boolean }>`
  margin: 0;
  padding: 0.75rem 0.5rem;
  background-color: ${({ isSelected }) =>
    isSelected ? '#EDF2F7' : 'transparent'};
  text-align: left;
  border: 0;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #edf2f775;
  }
`
