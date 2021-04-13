import React from 'react'
import ColumnSelect from '../src'

const options = [{ value: '1', label: '1' }]

const ColumnSelectExample = () => {
  return (
    <div>
      <ColumnSelect options={options} />
    </div>
  )
}

export default ColumnSelectExample
