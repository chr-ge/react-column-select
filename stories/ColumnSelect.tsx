import React, { FC } from 'react'
import ColumnSelect from '../src'
import { Theme } from '../src/types'
import './column_select.css'

export interface ColumnSelectProps {
  theme?: Theme
  disableDoubleClick?: boolean
  disableKeyboard?: boolean
}

const options = [
  { value: 'pawn', label: 'Pawn' },
  { value: 'bishop', label: 'Bishop' },
  { value: 'knight', label: 'Knight' },
  { value: 'rook', label: 'Rook' },
  { value: 'queen', label: 'Queen' },
  { value: 'king', label: 'King' },
]

const ColumnSelectExample: FC<ColumnSelectProps> = ({
  theme,
  disableDoubleClick,
  disableKeyboard,
}) => (
  <article>
    <section>
      <h2>Column Select</h2>
      <ColumnSelect
        options={options}
        leftHeader="Available Pieces"
        rightHeader="Selected Pieces"
        theme={theme}
        disableDoubleClick={disableDoubleClick}
        disableKeyboard={disableKeyboard}
      />
    </section>
  </article>
)

export default ColumnSelectExample
