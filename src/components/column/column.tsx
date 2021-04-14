import React, { FC, ReactNode } from 'react'
import { VStack } from './column.style'

interface ColumnProps {
  /**
   * The children of the column.
   * @type ReactNode
   */
  children: ReactNode
}

const Column: FC<ColumnProps> = ({ children }) => {
  return <VStack>{children}</VStack>
}

export default Column
