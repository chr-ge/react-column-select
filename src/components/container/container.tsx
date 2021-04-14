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
  /**
   * The currently selected option.
   */
  current: OptionType
  /**
   * The function to set the current option.
   */
  select: (option: OptionType) => void
  /**
   * The function to select an option.
   */
  add: () => void
  /**
   * The function to remove a selected option.
   */
  remove: () => void
  /**
   * The function to select all options.
   */
  addAll: () => void
  /**
   * The function to remove all selected options.
   */
  removeAll: () => void
  /**
   * The available select options.
   */
  options: OptionType[]
  /**
   * The selected options.
   */
  selected: OptionType[]
  /**
   * The react-column-select theme object.
   */
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
          rightIcon={<AddIcon />}
          theme={theme}
        />
        <Button
          type='button'
          label='Add All'
          onClick={addAll}
          rightIcon={<AddAll />}
          marginTop='0.5rem'
          theme={theme}
        />
        <Button
          type='button'
          label='Remove'
          onClick={add}
          leftIcon={<RemoveIcon />}
          marginTop='1.5rem'
          theme={theme}
        />
        <Button
          type='button'
          label='Remove All'
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
