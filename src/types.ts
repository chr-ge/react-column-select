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
  optionSelectedBgColor?: string
  optionHoverBgColor?: string
  searchFocusBorderColor?: string
}

export type ColumnType = 'options' | 'selected'

export type ActionTypes = 'add' | 'add-all' | 'remove' | 'remove-all'

export type ActionMeta = {
  action: ActionTypes
}

export type Labels = {
  /**
   * The header text of the left column.
   * @default 'Options'
   */
  leftHeader: string
  /**
   * The header text of the right column.
   * @default 'Selected'
   */
  rightHeader: string
  /**
   * The placeholder string for the search inputs.
   * @default 'Search ...'
   */
  searchPlaceholder: string
  /**
   * Add button label.
   * @default 'Add'
   */
  add: string
  /**
   * Add All button label.
   * @default 'Add All'
   */
  addAll: string
  /**
   * Remove button label.
   * @default 'Remove'
   */
  remove: string
  /**
   * Remove All button label.
   * @default 'Remove All'
   */
  removeAll: string
}
