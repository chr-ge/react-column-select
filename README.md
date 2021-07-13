# React Column Select

Fored from [chr-ge/react-column-select](https://img.shields.io/github/license/chr-ge/react-column-select)

## 🚀 Features

- Easily customize colors
- Responsive Design
- Styled with emotion
- Built with Typescript

## ⚡ Installation

```sh
yarn add react-column-select
# or
npm i react-column-select
```

## 🏁 Getting Started

```jsx
import React, { useState } from 'react'
import ColumnSelect from 'react-column-select'

const HobbiesSelect = () => {
  const [selected, setSelected] = useState([])

  const hobbies = [
    { value: '1', label: 'Hockey' },
    { value: '2', label: 'Painting' },
    { value: '3', label: 'Singing' },
  ]

  const onChange = (values) => {
    setSelected(values)
  }

  return (
    <div>
      <h2>Select Your Hobbies</h2>
      <ColumnSelect
        options={hobbies}
        onChange={onChange}
        leftHeader='Available Hobbies'
        rightHeader='Selected Hobbies'
      />
    </div>
  )
}
```

## ⚙️ Props

| name                 | type     | isRequired | default      | description                                         |
| -------------------- | -------- | ---------- | ------------ | --------------------------------------------------- |
| `options`            | array    | ✔          | N/A          | available select options                            |
| `onChange`           | function | ✔          | N/A          | function called when selected values change         |
| `defaultValue`       | array    | ✖          | []           | set the initial selected values                     |
| `max`                | number   | ✖          | N/A          | set the max number of options that can be selected  |
| `leftHeader`         | string   | ✖          | 'Options'    | the left column header                              |
| `rightHeader`        | string   | ✖          | 'Selected'   | the right column headers                            |
| `isSearchable`       | boolean  | ✖          | false        | enables searching                                   |
| `searchPlaceholder`  | string   | ✖          | 'Search ...' | the placeholder string for the search inputs        |
| `theme`              | object   | ✖          | {}           | the color theme                                     |
| `disableAllButtons`  | boolean  | ✖          | false        | disable the "Add All" and "Remove All" buttons      |
| `disableDoubleClick` | boolean  | ✖          | false        | disable double click to add/remove an option        |
| `disableKeyboard`    | boolean  | ✖          | false        | disable navigation the select options with keyboard |

## 🎨 Theme Customization

Below is the default theme, change the values that you want to customize:

```jsx
{
    headerBgColor: '#d6b1ff',
    columnBorderColor: '#cfa4ff',
    textColor: '#000000',
    columnBgColor: '#CBD5E0',
    buttonBgColor: '#CBD5E0',
    buttonHoverBgColor: '#CBD5E0',
    buttonDisabledBgColor: '#CBD5E0',
    searchFocusBorderColor: '#805Ad5',
    optionHoverBgColor: '#CBD5E0',
    optionSelectedBgColor: '#CBD5E0',
}
```

## License

Distributed under the MIT license. See `LICENSE` for more information.
