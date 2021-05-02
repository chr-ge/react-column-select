import React, { FC } from 'react'
import ColumnSelect from '../src'

const options = [
  { value: 'pawn', label: 'Pawn' },
  { value: 'bishop', label: 'Bishop' },
  { value: 'knight', label: 'Knight' },
  { value: 'rook', label: 'Rook' },
  { value: 'queen', label: 'Queen' },
  { value: 'king', label: 'King' },
]

const ColumnSelectExample: FC = () => {
  return (
    <div>
      <ColumnSelect
        options={options}
        onChange={(values) => console.info(values)}
      />
    </div>
  )
}

export default ColumnSelectExample
