import styled from '@emotion/styled'
import { Theme } from '../../types'

export const Grid = styled.div`
  display: grid;
  margin-top: 1rem;
  min-height: 24rem;
  gap: 0.5rem;
  grid-template-columns: repeat(1, 5fr);
  grid-template-areas: 'a' 'd' 'b' 'c' 'e';

  @media (min-width: 600px) {
    grid-template-columns: repeat(5, 2fr);
    grid-template-areas: 'a a b c c' 'd d b e e';
  }
`

export const GridItemHeaderLeft = styled.div<{ theme?: Theme }>`
  grid-area: a;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  border-width: thin;
  background-color: ${(p) => p.theme.columnBgColor};
`

export const GridItemHeaderRight = styled.div<{ theme?: Theme }>`
  grid-area: c;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-width: thin;
  background-color: ${(p) => p.theme.columnBgColor};
`

export const GridItemCenter = styled.div`
  grid-area: b;
  align-self: center;
`

export const GridItemColumnLeft = styled.div`
  grid-area: d;
  border: thin solid #edf2f7;
`

export const GridItemColumnRight = styled.div`
  grid-area: e;
  border: thin solid #edf2f7;
`

export const Text = styled.p`
  font-weight: 600;
  font-size: 1em;
  margin: 0;
`
