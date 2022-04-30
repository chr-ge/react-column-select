import React, { useState } from 'react'
import { chessOptions } from './data/options'
import ColumnSelect from '../src'

const Basic: React.FC = () => {
  const [selected, setSelected] = useState([])

  return (
    <div>
      <p>Choose your favorite chess pieces.</p>
      <ColumnSelect
        options={chessOptions}
        onChange={(values) => setSelected(values)}
      />
    </div>
  )
}

export default Basic
