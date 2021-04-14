import React, { FC, ReactNode } from 'react'
import { VStack } from './column.style'

interface ColumnProps {
  children: ReactNode
}

const Column: FC<ColumnProps> = ({ children }) => {
  return <VStack>{children}</VStack>
}

export default Column
