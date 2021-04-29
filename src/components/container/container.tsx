import React, { FC, KeyboardEvent } from 'react'
import {
  Grid,
  GridItemHeaderLeft,
  GridItemHeaderRight,
  GridItemCenter,
  GridItemColumnLeft,
  GridItemColumnRight,
  Text,
} from './container.style'
import { Column as ColumnType, Option as OptionType, Theme } from '../../types'
import Column from '../column/column'
import Option from '../option/option'
import Button from '../button/button'
import { AddIcon, AddAll, RemoveIcon, RemoveAll } from '../icons'

interface ContainerProps {
  /**
   * The header text of the left column.
   */
  leftHeader?: string
  /**
   * The header text of the right column.
   */
  rightHeader?: string
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
   * The function to go to next option.
   */
  onNext: (column: ColumnType) => void
  /**
   * The function to go to previous option.
   */
  onPrevious: (column: ColumnType) => void
  /**
   * Disable double clicking to add/remove a list option.
   */
  disableDoubleClick?: boolean
  /**
   * Disable keyboard navigation between list options.
   */
  disableKeyboard?: boolean
  /**
   * The react-column-select theme object.
   */
  theme: Theme
}

const Container: FC<ContainerProps> = ({
  leftHeader,
  rightHeader,
  current,
  select,
  add,
  addAll,
  remove,
  removeAll,
  options,
  selected,
  onNext,
  onPrevious,
  disableDoubleClick,
  disableKeyboard,
  theme,
}) => {
  const handleKeyPress = (
    e: KeyboardEvent<HTMLDivElement>,
    column: ColumnType
  ) => {
    const currentActive = document.activeElement

    if (e.key === 'ArrowDown') {
      onNext(column)
      ;(currentActive?.nextElementSibling as HTMLElement)?.focus()
    }
    if (e.key === 'ArrowUp') {
      onPrevious(column)
      ;(currentActive?.previousElementSibling as HTMLElement)?.focus()
    }
  }

  return (
    <Grid>
      <GridItemHeaderLeft theme={theme}>
        <Text>{leftHeader || 'Options'}</Text>
      </GridItemHeaderLeft>
      <GridItemColumnLeft
        theme={theme}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          disableKeyboard ? null : handleKeyPress(e, ColumnType.OPTIONS)
        }
      >
        <Column>
          {options.map((option) => (
            <Option
              key={`l-${option.value}`}
              label={option.label}
              isSelected={option.value === current?.value}
              onClick={() => select(option)}
              onDoubleClick={() => (disableDoubleClick ? null : add())}
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
          isDisabled={!options.length}
          theme={theme}
        />
        <Button
          type='button'
          label='Add All'
          onClick={addAll}
          rightIcon={<AddAll />}
          marginTop='0.5rem'
          isDisabled={!options.length}
          theme={theme}
        />
        <Button
          type='button'
          label='Remove'
          onClick={remove}
          leftIcon={<RemoveIcon />}
          marginTop='1.5rem'
          isDisabled={!selected.length}
          theme={theme}
        />
        <Button
          type='button'
          label='Remove All'
          onClick={removeAll}
          leftIcon={<RemoveAll />}
          marginTop='0.5rem'
          isDisabled={!selected.length}
          theme={theme}
        />
      </GridItemCenter>
      <GridItemHeaderRight theme={theme}>
        <Text>{rightHeader || 'Selected'}</Text>
      </GridItemHeaderRight>
      <GridItemColumnRight
        theme={theme}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          disableKeyboard ? null : handleKeyPress(e, ColumnType.SELECTED)
        }
      >
        <Column>
          {selected.map((option) => (
            <Option
              key={`r-${option.value}`}
              label={option.label}
              isSelected={option.value === current?.value}
              onClick={() => select(option)}
              onDoubleClick={() => (disableDoubleClick ? null : remove())}
            />
          ))}
        </Column>
      </GridItemColumnRight>
    </Grid>
  )
}

export default Container
