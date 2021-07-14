export type OptionType = {
  value: string | number
  label: string
}

export type OptionsType = Array<OptionType>

export type Theme = {
  headerBgColor?: string
  columnBorderColor?: string
  textColor?: string
  columnBgColor?: string
  buttonBgColor?: string
  searchFocusBorderColor?: string
  optionSelectedBgColor?: string
  optionHoverBgColor?: string
}

export type ColumnType = 'options' | 'selected'

export type ActionTypes = 'add' | 'add-all' | 'remove' | 'remove-all'

export type ActionMeta = {
  action: ActionTypes
}
