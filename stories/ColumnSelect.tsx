import React, { FC, useState } from 'react'
import ColumnSelect from '../src'
import { OptionsType, Theme } from '../src/types'
import './column_select.css'

export interface ColumnSelectProps {
  theme?: Theme
  defaultValue?: OptionsType
  disableDoubleClick?: boolean
  disableKeyboard?: boolean
}

export const options = [
  { value: 'pawn', label: 'Pawn' },
  { value: 'bishop', label: 'Bishop' },
  { value: 'knight', label: 'Knight' },
  { value: 'rook', label: 'Rook' },
  { value: 'queen', label: 'Queen' },
  { value: 'king', label: 'King' },
]

const ColumnSelectExample: FC<ColumnSelectProps> = ({
  theme,
  defaultValue,
  disableDoubleClick,
  disableKeyboard,
}) => {
  const [selected, setSelected] = useState<OptionsType>([])

  return (
    <article>
      <section>
        <h2>Column Select</h2>
        <ColumnSelect
          options={options}
          defaultValue={defaultValue}
          onChange={(values) => setSelected(values)}
          leftHeader='Available Pieces'
          rightHeader='Selected Pieces'
          theme={theme}
          disableDoubleClick={disableDoubleClick}
          disableKeyboard={disableKeyboard}
        />
      </section>
    </article>
  )
}

export default ColumnSelectExample
