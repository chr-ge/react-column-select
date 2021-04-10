import styled from '@emotion/styled'
import { Theme } from '../../types'

export const Grid = styled.div`
    margin-top: 2rem,
    min-height: 24rem,
    gap: 2,
    grid-template-columns: repeat(1, 5fr),
    grid-template-areas: "a a b c c" "d d b e e"
`;

export const GridItem = styled.div<{ theme?: Theme }>`
    grid-area: a,
    border-width: thin,
    background-color: ${(p) => (p.theme.columnBgColor)},
    grid-template-columns: repeat(1, 5fr),
    grid-template-areas: "a a b c c" "d d b e e"
`;

export const Text = styled.p`
    font-weight: 600,
    font-size: 0.5em
`
