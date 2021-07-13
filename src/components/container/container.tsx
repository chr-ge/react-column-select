import React, { FC, useState, KeyboardEvent, ChangeEvent, useMemo } from 'react'
import {
  Grid,
  GridItemHeaderLeft,
  GridItemHeaderRight,
  GridItemCenter,
  GridItemColumnLeft,
  GridItemColumnRight,
  Input,
  Text,
} from './container.style'
import type { ColumnType, OptionType, OptionsType, Theme } from '../../types'
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
  options: OptionsType
  /**
   * The selected options.
   */
  selected: OptionsType
  /**
   * Truthy if the selected options >= max allowed options.
   */
  isMax: boolean
  /**
   * Disables the "add all" button if the available options > max allowed options.
   */
  disableAddAll: boolean
  /**
   * The function to go to next option.
   */
  onNext: (column: ColumnType) => void
  /**
   * The function to go to previous option.
   */
  onPrevious: (column: ColumnType) => void
  /**
   * Enable to make the columns searchable.
   */
  isSearchable?: boolean
  /**
   * The placeholder string for the search inputs.
   */
  searchPlaceholder?: string
  /**
   * Disable the "Add All" and "Remove All" buttons.
   * @default false
   */
  disableAllButtons?: boolean
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
  isMax,
  disableAddAll,
  onNext,
  onPrevious,
  isSearchable = false,
  searchPlaceholder,
  disableAllButtons,
  disableDoubleClick,
  disableKeyboard,
  theme,
}) => {
  const [search, setSearch] = useState({ left: '', right: '' })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

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

  const filteredOptions = useMemo(
    () =>
      isSearchable
        ? options.filter((o) =>
            o.label
              .toLocaleLowerCase()
              .includes(search.left.toLocaleLowerCase())
          )
        : options,
    [options, search.left]
  )

  const filteredSelected = useMemo(
    () =>
      isSearchable
        ? selected.filter((s) =>
            s.label
              .toLocaleLowerCase()
              .includes(search.right.toLocaleLowerCase())
          )
        : selected,
    [selected, search.right]
  )

  return (
    <Grid>
      <GridItemColumnLeft
        theme={theme}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          disableKeyboard ? null : handleKeyPress(e, 'options')
        }
      >
        <GridItemHeaderLeft theme={theme}>
          <Text>{leftHeader || 'Options'}</Text>
        </GridItemHeaderLeft>
        {isSearchable && (
          <Input
            id='left-search'
            name='left'
            placeholder={searchPlaceholder ?? 'Search ...'}
            value={search.left}
            onChange={handleOnChange}
            type='search'
            theme={theme}
          />
        )}
        <Column id='left-column' isSearchable={isSearchable}>
          {filteredOptions.map((option) => (
            <Option
              key={`l-${option.value}`}
              theme={theme}
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
          isDisabled={!options.length || isMax}
          theme={theme}
        />
        {!disableAllButtons && (
          <Button
            type='button'
            label='Add All'
            onClick={addAll}
            rightIcon={<AddAll />}
            marginTop='0.5rem'
            isDisabled={!options.length || disableAddAll}
            theme={theme}
          />
        )}
        <Button
          type='button'
          label='Remove'
          onClick={remove}
          leftIcon={<RemoveIcon />}
          marginTop='1.5rem'
          isDisabled={!selected.length}
          theme={theme}
        />
        {!disableAllButtons && (
          <Button
            type='button'
            label='Remove All'
            onClick={removeAll}
            leftIcon={<RemoveAll />}
            marginTop='0.5rem'
            isDisabled={!selected.length}
            theme={theme}
          />
        )}
      </GridItemCenter>
      <GridItemColumnRight
        theme={theme}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          disableKeyboard ? null : handleKeyPress(e, 'selected')
        }
      >
        <GridItemHeaderRight theme={theme}>
          <Text>{rightHeader || 'Selected'}</Text>
        </GridItemHeaderRight>
        {isSearchable && (
          <Input
            id='right-search'
            name='right'
            placeholder={searchPlaceholder ?? 'Search ...'}
            value={search.right}
            onChange={handleOnChange}
            type='search'
            theme={theme}
          />
        )}
        <Column id='right-column' isSearchable={isSearchable}>
          {filteredSelected.map((option) => (
            <Option
              key={`r-${option.value}`}
              theme={theme}
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
