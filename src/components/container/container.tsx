import React from 'react'
import { Grid, GridItem, Text } from './container.style'
import { Theme } from '../../types'

interface ContainerProps {
  theme?: Theme
}

const Container = ({ theme }: ContainerProps) => {
  return (
    <Grid>
      <GridItem theme={theme}>
        <Text>Options</Text>
      </GridItem>
      <GridItem theme={theme} />
      <GridItem theme={theme} />
      <GridItem theme={theme}>
        <Text>Selected</Text>
      </GridItem>
      <GridItem theme={theme} />
    </Grid>
  )
}

export default Container
