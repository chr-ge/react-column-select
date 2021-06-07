import React, { FC, ReactNode } from 'react'
import { VStack } from './column.style'

interface ColumnProps {
  /**
   * HTML Id.
   */
  id: string
  /**
   * Enable to make the columns searchable.
   */
  isSearchable: boolean
  /**
   * The children of the column.
   * @type ReactNode
   */
  children: ReactNode
}

const Column: FC<ColumnProps> = ({ id, isSearchable, children }) => {
  return (
    <VStack id={id} isSearchable={isSearchable}>
      {children}
    </VStack>
  )
}

export default Column
