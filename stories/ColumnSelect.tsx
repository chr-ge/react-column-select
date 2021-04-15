import React, { FC } from 'react'
import ColumnSelect from '../src'
import { Theme } from '../src/types'
import './column_select.css'

export interface ColumnSelectProps {
  theme?: Theme
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
  disableKeyboard,
}) => (
  <article>
    <section>
      <h2>Column Select</h2>
      <ColumnSelect
        options={options}
        theme={theme}
        disableKeyboard={disableKeyboard}
      />
    </section>
  </article>
)

export default ColumnSelectExample
