import React from 'react'
import {
  Grid,
  GridItemHeaderLeft,
  GridItemHeaderRight,
  GridItemCenter,
  GridItemColumnLeft,
  GridItemColumnRight,
  Text,
} from './container.style'
import { Option as OptionType, Theme } from '../../types'
import Column from '../column/column'
import Option from '../option/option'
import Button from '../button/button'
import AddIcon from '../icons/AddIcon'
import AddAll from '../icons/AddAll'
import RemoveIcon from '../icons/RemoveIcon'
import RemoveAll from '../icons/RemoveAll'

interface ContainerProps {
  current: OptionType
  select: (option: OptionType) => void
  add: () => void
  remove: () => void
  addAll: () => void
  removeAll: () => void
  options: OptionType[]
  selected: OptionType[]
  theme: Theme
}

const Container = ({
  current,
  select,
  add,
  addAll,
  remove,
  removeAll,
  options,
  selected,
  theme,
}: ContainerProps) => {
  return (
    <Grid>
      <GridItemHeaderLeft theme={theme}>
        <Text>Options</Text>
      </GridItemHeaderLeft>
      <GridItemColumnLeft theme={theme}>
        <Column>
          {options.map((option) => (
            <Option
              key={`r-${option.value}`}
              label={option.label}
              isSelected={option.value === current?.value}
              onClick={() => select(option)}
              onDoubleClick={remove}
            />
          ))}
        </Column>
      </GridItemColumnLeft>
      <GridItemCenter>
        <Button
          type='button'
          onClick={add}
          label='Add'
          ariaLabel='Add'
          rightIcon={<AddIcon />}
          theme={theme}
        />
        <Button
          type='button'
          label='Add All'
          ariaLabel='Add All'
          onClick={addAll}
          rightIcon={<AddAll />}
          marginTop='0.5rem'
          theme={theme}
        />
        <Button
          type='button'
          label='Remove'
          ariaLabel='Remove'
          onClick={add}
          leftIcon={<RemoveIcon />}
          marginTop='1.5rem'
          theme={theme}
        />
        <Button
          type='button'
          label='Remove All'
          ariaLabel='Remove All'
          onClick={removeAll}
          leftIcon={<RemoveAll />}
          marginTop='0.5rem'
          theme={theme}
        />
      </GridItemCenter>
      <GridItemHeaderRight theme={theme}>
        <Text>Selected</Text>
      </GridItemHeaderRight>
      <GridItemColumnRight theme={theme}>
        <Column>
          {selected.map((option) => (
            <Option
              key={`r-${option.value}`}
              label={option.label}
              isSelected={option.value === current?.value}
              onClick={() => select(option)}
              onDoubleClick={remove}
            />
          ))}
        </Column>
      </GridItemColumnRight>
    </Grid>
  )
}

export default Container
