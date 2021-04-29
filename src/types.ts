export type Option = {
  value: string | number
  label: string
}

export type Theme = {
  headerBgColor?: string
  secondary?: string
  textColor?: string
  columnBgColor?: string
  buttonBgColor?: string
}

export enum Column {
  OPTIONS = 'OPTIONS',
  SELECTED = 'SELECTED',
}
