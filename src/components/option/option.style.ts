import styled from '@emotion/styled'

export const Row = styled.p<{ isSelected: boolean }>`
  margin: 0;
  padding: 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? '#EDF2F7' : 'none')};
  user-select: none;
  cursor: pointer;

  &:hover {
    font-weight: 550;
  }
`
