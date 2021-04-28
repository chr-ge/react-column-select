import React, { FC, useState } from 'react'
import Container from './components/container/container'
import { Option, Theme, Column } from './types'

interface ColumnSelectProps {
  /**
   * The array of available select options.
   */
  options: Option[]
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
  theme,
  disableDoubleClick = false,
  disableKeyboard = false,
}) => {
  const [selectOptions, setSelectOptions] = useState<Option[]>(options)
  const [current, setCurrent] = useState<Option>(options[0])
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const add = () => {
    if (selectedOptions.find((c) => c.value === current.value)) return
    setSelectOptions(selectOptions.filter((o) => o.value !== current.value))
    setSelectedOptions([...selectedOptions, current])
  }

  const remove = () => {
    if (selectOptions.find((c) => c.value === current.value)) return
    setSelectedOptions(selectedOptions.filter((o) => o.value !== current.value))
    setSelectOptions([...selectOptions, current])
  }

  const addAll = () => {
    if (!selectOptions.length) return
    setSelectedOptions([...selectedOptions, ...selectOptions])
    setCurrent(selectOptions[0])
    setSelectOptions([])
  }

  const removeAll = () => {
    if (!selectedOptions.length) return
    setSelectOptions([...selectOptions, ...selectedOptions])
    setCurrent(selectedOptions[0])
    setSelectedOptions([])
  }

  const handleNext = (column: Column) => {
    const isOptionsCol = column === Column.OPTIONS
    const options = isOptionsCol ? selectOptions : selectedOptions

    const currentIndex = options.findIndex(
      (o) => o.value === current.value
    )

    if (currentIndex !== options.length - 1) {
      setCurrent(options[currentIndex + 1])
    }
  }

  const handlePrevious = (column: Column) => {
    const isOptionsCol = column === Column.OPTIONS
    const options = isOptionsCol ? selectOptions : selectedOptions
    
    const currentIndex = options.findIndex(
      (o) => o.value === current.value
    )
    if (currentIndex !== 0) {
      setCurrent(options[currentIndex - 1])
    }
  }

  const customTheme = Object.assign(
    {
      headerBgColor: '#d6b1ff',
      secondary: '#cfa4ff',
      textColor: '#000000',
      columnBgColor: '#CBD5E0',
      buttonBgColor: '#CBD5E0',
    },
    theme
  )

  return (
    <Container
      current={current}
      select={(option: Option) => setCurrent(option)}
      add={add}
      addAll={addAll}
      remove={remove}
      removeAll={removeAll}
      options={selectOptions}
      selected={selectedOptions}
      onNext={handleNext}
      onPrevious={handlePrevious}
      disableDoubleClick={disableDoubleClick}
      disableKeyboard={disableKeyboard}
      theme={customTheme}
    />
  )
}

export default ColumnSelect
