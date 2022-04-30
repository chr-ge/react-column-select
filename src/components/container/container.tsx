import React, {
  useState,
  KeyboardEvent,
  useMemo,
  ChangeEventHandler,
} from 'react'
import {
  Grid,
  GridItemHeaderLeft,
  GridItemHeaderRight,
  GridItemCenter,
  GridItemColumnLeft,
  GridItemColumnRight,
  Column,
  Input,
  Text,
} from './container.style'
import type {
  ColumnType,
  OptionType,
  OptionsType,
  Theme,
  Labels,
} from '../../types'
import { AddIcon, AddAll, RemoveIcon, RemoveAll } from '../icons'
import Option from '../option/option'
import Button from '../button/button'

interface ContainerProps {
  /**
   * The component labels.
   */
  labels: Labels
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

const Container: React.FC<ContainerProps> = ({
  labels,
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
  disableAllButtons,
  disableDoubleClick,
  disableKeyboard,
  theme,
}) => {
  const [search, setSearch] = useState({ left: '', right: '' })

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

  const handleKeyPress = (
    e: KeyboardEvent<HTMLDivElement>,
    column: ColumnType
  ): void => {
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
      <GridItemHeaderLeft theme={theme}>
        <Text>{labels.leftHeader}</Text>
      </GridItemHeaderLeft>
      <GridItemColumnLeft
        theme={theme}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          disableKeyboard ? null : handleKeyPress(e, 'options')
        }
      >
        {isSearchable && (
          <Input
            id='left-search'
            name='left'
            placeholder={labels.searchPlaceholder}
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
              label={option.label}
              isSelected={option.value === current?.value}
              onClick={() => select(option)}
              onDoubleClick={() => (disableDoubleClick ? null : add())}
              theme={theme}
            />
          ))}
        </Column>
      </GridItemColumnLeft>
      <GridItemCenter>
        <Button
          type='button'
          onClick={add}
          label={labels.add}
          rightIcon={<AddIcon />}
          isDisabled={!options.length || isMax}
          theme={theme}
        />
        {!disableAllButtons && (
          <Button
            type='button'
            label={labels.addAll}
            onClick={addAll}
            rightIcon={<AddAll />}
            marginTop='0.5rem'
            isDisabled={!options.length || disableAddAll}
            theme={theme}
          />
        )}
        <Button
          type='button'
          label={labels.remove}
          onClick={remove}
          leftIcon={<RemoveIcon />}
          marginTop='1.5rem'
          isDisabled={!selected.length}
          theme={theme}
        />
        {!disableAllButtons && (
          <Button
            type='button'
            label={labels.removeAll}
            onClick={removeAll}
            leftIcon={<RemoveAll />}
            marginTop='0.5rem'
            isDisabled={!selected.length}
            theme={theme}
          />
        )}
      </GridItemCenter>
      <GridItemHeaderRight theme={theme}>
        <Text>{labels.rightHeader}</Text>
      </GridItemHeaderRight>
      <GridItemColumnRight
        theme={theme}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          disableKeyboard ? null : handleKeyPress(e, 'selected')
        }
      >
        {isSearchable && (
          <Input
            id='right-search'
            name='right'
            placeholder={labels.searchPlaceholder}
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
              label={option.label}
              isSelected={option.value === current?.value}
              onClick={() => select(option)}
              onDoubleClick={() => (disableDoubleClick ? null : remove())}
              theme={theme}
            />
          ))}
        </Column>
      </GridItemColumnRight>
    </Grid>
  )
}

export default Container
