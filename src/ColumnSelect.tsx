import React, { FC, useMemo, useState } from 'react'
import Container from './components/container/container'
import type {
  OptionType,
  Theme,
  ColumnType,
  OptionsType,
  ActionMeta,
} from './types'

interface ColumnSelectProps {
  /**
   * The array of available select options.
   */
  options: OptionsType
  /**
   * The function called on change.
   */
  onChange: (values: OptionsType, actionMeta: ActionMeta) => void
  /**
   * Set the initial selected values.
   */
  defaultValue?: OptionsType
  /**
   * Set the maximum number of options that can be selected.
   */
  max?: number
  /**
   * The header text of the left column.
   * @default 'Options'
   */
  leftHeader?: string
  /**
   * The header text of the right column.
   * @default 'Selected'
   */
  rightHeader?: string
  /**
   * Disable double clicking to add/remove a list option.
   * @default false
   */
  disableDoubleClick?: boolean
  /**
   * Disable keyboard navigation on the list of options.
   * @default false
   */
  disableKeyboard?: boolean
  /**
   * The react-column-select theme object.
   */
  theme?: Theme
}

const ColumnSelect: FC<ColumnSelectProps> = ({
  options,
  onChange,
  defaultValue = [],
  max,
  leftHeader,
  rightHeader,
  theme,
  disableDoubleClick,
  disableKeyboard,
}) => {
  const [selectOptions, setSelectOptions] = useState<OptionsType>(
    options.filter((o) => !defaultValue.find((d) => d.value === o.value))
  )
  const [current, setCurrent] = useState<OptionType>(options[0])
  const [selectedOptions, setSelectedOptions] = useState<OptionsType>(
    defaultValue
  )

  const isMax = useMemo(() => (max ? selectedOptions.length >= max : false), [
    selectedOptions,
  ])

  const disableAddAll = useMemo(
    () => (max ? selectOptions.length > max : false),
    [max]
  )

  const add = () => {
    if (selectedOptions.find((c) => c.value === current.value) || isMax) return
    setSelectOptions(selectOptions.filter((o) => o.value !== current.value))
    setSelectedOptions([...selectedOptions, current])

    onChange(selectedOptions, { action: 'add' })
  }

  const addAll = () => {
    if (!selectOptions.length) return
    setSelectedOptions([...selectedOptions, ...selectOptions])
    setCurrent(selectOptions[0])
    setSelectOptions([])

    onChange(selectedOptions, { action: 'add-all' })
  }

  const remove = () => {
    if (selectOptions.find((c) => c.value === current.value)) return
    setSelectedOptions(selectedOptions.filter((o) => o.value !== current.value))
    setSelectOptions([...selectOptions, current])

    onChange(selectedOptions, { action: 'remove' })
  }

  const removeAll = () => {
    if (!selectedOptions.length) return
    setSelectOptions([...selectOptions, ...selectedOptions])
    setCurrent(selectedOptions[0])
    setSelectedOptions([])

    onChange(selectedOptions, { action: 'remove-all' })
  }

  const handleNext = (column: ColumnType) => {
    const isOptionsCol = column === 'options'
    const options = isOptionsCol ? selectOptions : selectedOptions

    const currentIndex = options.findIndex((o) => o.value === current.value)

    if (currentIndex !== options.length - 1) {
      setCurrent(options[currentIndex + 1])
    }
  }

  const handlePrevious = (column: ColumnType) => {
    const isOptionsCol = column === 'options'
    const options = isOptionsCol ? selectOptions : selectedOptions

    const currentIndex = options.findIndex((o) => o.value === current.value)
    if (currentIndex !== 0) {
      setCurrent(options[currentIndex - 1])
    }
  }

  const customTheme = Object.assign(
    {
      headerBgColor: '#d6b1ff',
      columnBorderColor: '#cfa4ff',
      textColor: '#000000',
      columnBgColor: '#CBD5E0',
      buttonBgColor: '#CBD5E0',
    },
    theme
  )

  return (
    <Container
      leftHeader={leftHeader}
      rightHeader={rightHeader}
      current={current}
      select={(option: OptionType) => setCurrent(option)}
      add={add}
      addAll={addAll}
      remove={remove}
      removeAll={removeAll}
      options={selectOptions}
      selected={selectedOptions}
      isMax={isMax}
      disableAddAll={disableAddAll}
      onNext={handleNext}
      onPrevious={handlePrevious}
      disableDoubleClick={disableDoubleClick}
      disableKeyboard={disableKeyboard}
      theme={customTheme}
    />
  )
}

export default ColumnSelect
