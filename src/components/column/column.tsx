import React, { FC, ReactNode } from 'react'
import { VStack } from './column.style'

interface ColumnProps {
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

const Column: FC<ColumnProps> = ({ isSearchable, children }) => {
  return <VStack isSearchable={isSearchable}>{children}</VStack>
}

export default Column
