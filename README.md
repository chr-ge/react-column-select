# _Package Under Development_

# React Column Select

[![NPM](https://badgen.net/npm/v/react-column-select)](https://www.npmjs.com/package/react-column-select)
[![CI](https://github.com/chr-ge/react-column-select/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/chr-ge/react-column-select/actions/workflows/ci.yml)
[![SIZE](https://badgen.net/bundlephobia/min/react-column-select)](https://bundlephobia.com/result?p=react-column-select)
[![Depfu](https://badges.depfu.com/badges/c540bb2dbd4e634a557231ecd335474e/overview.svg)](https://depfu.com/repos/github/chr-ge/react-column-select?project_id=24188)
![GitHub](https://img.shields.io/github/license/chr-ge/react-column-select)

## 🚀 Features

- Easily customize colors
- Responsive Design
- Styled with emotion
- Built with Typescript

## ⚡ Installation

```sh
yarn add react-column-select
# or
npm install react-column-select
```

## 🏁 Getting Started

```jsx
import React, { useState } from 'react'
import ColumnSelect from 'react-column-select'

const hobbies = [
  { value: '1', label: 'Hockey' },
  { value: '2', label: 'Painting' },
  { value: '3', label: 'Singing' },
]

const HobbiesSelect = () => {
  const [selected, setSelected] = useState([])

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

| name                 | type     | isRequired | default    | description                                         |
| -------------------- | -------- | ---------- | ---------- | --------------------------------------------------- |
| `options`            | array    | ✔          | N/A        | available select options                            |
| `onChange`           | function | ✖          | N/A        | function called when selected values change         |
| `defaultValue`       | array    | ✖          | []         | set the initial selected values                     |
| `leftHeader`         | string   | ✖          | 'Options'  | the left column header                              |
| `rightHeader`        | string   | ✖          | 'Selected' | the right column header                             |
| `theme`              | object   | ✖          | {}         | the color theme                                     |
| `disableDoubleClick` | boolean  | ✖          | false      | disable double click to add/remove an option        |
| `disableKeyboard`    | boolean  | ✖          | false      | disable navigation the select options with keyboard |

## 🎨 Theme Customization

Below is the default theme, change the values that you want to customize:

```jsx
{
    headerBgColor: '#d6b1ff',
    columnBorderColor: '#cfa4ff',
    textColor: '#000000',
    columnBgColor: '#CBD5E0',
    buttonBgColor: '#CBD5E0',
}
```

## License

Distributed under the MIT license. See `LICENSE` for more information.
