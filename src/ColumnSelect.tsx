import React, { useState } from 'react'
import Container from './components/container/container'
import { Option, Theme } from './types'

interface ColumnSelectProps {
  options: Option[]
  theme?: Theme
}

const ColumnSelect = ({ options, theme }: ColumnSelectProps) => {
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

  const customTheme = Object.assign(
    {
      primary: '#0f52ba',
      secondary: '#ffdf00',
      columnBgColor: '#CBD5E0',
      buttonBgColor: '#CBD5E0'
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
      theme={customTheme}
    />
  )
}

export default ColumnSelect
