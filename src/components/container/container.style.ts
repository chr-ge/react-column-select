import styled from '@emotion/styled'
import type { Theme } from '../../types'

export const Grid = styled.div`
  display: grid;
  margin-top: 1rem;
  min-height: 24rem;
  gap: 0.5rem;
  grid-template-columns: repeat(1, 5fr);
  grid-template-areas: 'a' 'd' 'b' 'c' 'e';
  &,
  & * {
    box-sizing: border-box;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(5, 2fr);
    grid-template-areas: 'a a b c c' 'd d b e e';
  }
`

export const GridItemHeaderLeft = styled.div<{ theme: Theme }>`
  grid-area: a;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-width: thin;
  background-color: ${({ theme }) => theme.headerBgColor};
`

export const GridItemHeaderRight = styled.div<{ theme: Theme }>`
  grid-area: c;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-width: thin;
  background-color: ${({ theme }) => theme.headerBgColor};
`

export const GridItemCenter = styled.div`
  grid-area: b;
  align-self: center;
`

export const GridItemColumnLeft = styled.div<{ theme: Theme }>`
  grid-area: d;
  border: thin solid ${({ theme }) => theme.columnBorderColor};
`

export const GridItemColumnRight = styled.div<{ theme: Theme }>`
  grid-area: e;
  border: thin solid ${({ theme }) => theme.columnBorderColor};
`

export const Input = styled.input<{ theme: Theme }>`
  width: 100%;
  min-width: 0;
  height: 2rem;
  border: 0;
  outline: 0;
  border-radius: 0.125rem;
  appearance: none;
  font-size: 0.875rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  transition: all 0.2s;

  &:focus {
    z-index: 1;
    border-color: ${({ theme }) => theme.searchFocusBorderColor};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.searchFocusBorderColor};
  }

  &:hover: {
    border-color: #cbd5e0;
  }
`

export const Text = styled.p`
  font-weight: 600;
  font-size: 1em;
  margin: 0;
`
