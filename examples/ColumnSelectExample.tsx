import React from 'react'
import ColumnSelect from '../src'

const options = [
  { value: 'pawn', label: 'Pawn' },
  { value: 'bishop', label: 'Bishop' },
  { value: 'knight', label: 'Knight' },
  { value: 'rook', label: 'Rook' },
  { value: 'queen', label: 'Queen' },
  { value: 'king', label: 'King' },
]

const ColumnSelectExample = () => {
  return (
    <div>
      <ColumnSelect options={options} />
    </div>
  )
}

export default ColumnSelectExample
