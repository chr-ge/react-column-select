import React, { useState } from 'react'
import ColumnSelect from '../src'
import type { OptionsType, Theme } from '../src/types'
import './column_select.css'

export interface ColumnSelectProps {
  theme: Theme
  defaultValue?: OptionsType
  isSearchable?: boolean
  disableAllButtons?: boolean
  disableDoubleClick?: boolean
  disableKeyboard?: boolean
  max?: number
}

export const options = [
  { value: 'pawn', label: 'Pawn' },
  { value: 'bishop', label: 'Bishop' },
  { value: 'knight', label: 'Knight' },
  { value: 'rook', label: 'Rook' },
  { value: 'queen', label: 'Queen' },
  { value: 'king', label: 'King' },
]

const ColumnSelectExample: React.FC<ColumnSelectProps> = ({
  theme,
  defaultValue,
  max,
  isSearchable,
  disableAllButtons,
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
          labels={{
            leftHeader: 'Available Pieces',
            rightHeader: 'Selected Pieces',
          }}
          theme={theme}
          max={max}
          isSearchable={isSearchable}
          disableAllButtons={disableAllButtons}
          disableDoubleClick={disableDoubleClick}
          disableKeyboard={disableKeyboard}
        />
      </section>
    </article>
  )
}

export default ColumnSelectExample
