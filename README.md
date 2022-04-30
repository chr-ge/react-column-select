# React Column Select

[![NPM](https://badgen.net/npm/v/react-column-select)](https://www.npmjs.com/package/react-column-select)
[![CI](https://github.com/chr-ge/react-column-select/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/chr-ge/react-column-select/actions/workflows/ci.yml)
[![react-column-select](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/p3czr7/develop&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/p3czr7/runs)
[![DeepScan grade](https://deepscan.io/api/teams/14351/projects/17471/branches/400913/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=14351&pid=17471&bid=400913)
[![SIZE](https://badgen.net/bundlephobia/min/react-column-select)](https://bundlephobia.com/result?p=react-column-select)
[![Depfu](https://badges.depfu.com/badges/c540bb2dbd4e634a557231ecd335474e/overview.svg)](https://depfu.com/repos/github/chr-ge/react-column-select?project_id=24188)
![GitHub](https://img.shields.io/github/license/chr-ge/react-column-select)

[Example](https://react-column-select.chr-ge.com/?path=/story/example-column-select--default)

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
        labels={{
          leftHeader: 'Available Hobbies',
          rightHeader: 'Selected Hobbies',
        }}
      />
    </div>
  )
}
```

## ⚙️ Props

| name                 | type     | isRequired | default     | description                                         |
| -------------------- | -------- | ---------- | ----------- | --------------------------------------------------- |
| `options`            | array    | ✔          | N/A         | available select options                            |
| `onChange`           | function | ✔          | N/A         | function called when selected values change         |
| `defaultValue`       | array    | ✖          | []          | set the initial selected values                     |
| `max`                | number   | ✖          | N/A         | set the max number of options that can be selected  |
| `labels`             | object   | ✖          | _see below_ | the labels for the headers, buttons & search input  |
| `theme`              | object   | ✖          | _see below_ | the color theme                                     |
| `isSearchable`       | boolean  | ✖          | false       | enables searching                                   |
| `disableAllButtons`  | boolean  | ✖          | false       | disable the "Add All" and "Remove All" buttons      |
| `disableDoubleClick` | boolean  | ✖          | false       | disable double click to add/remove an option        |
| `disableKeyboard`    | boolean  | ✖          | false       | disable navigation the select options with keyboard |

## 🎨 Theme Customization

Below is the default theme. Change the values that you want to customize:

```jsx
{
    headerBgColor: '#d1d5db',
    columnBorderColor: '#9ca3af',
    textColor: '#000000',
    columnBgColor: '#CBD5E0',
    buttonBgColor: '#CBD5E0',
    optionSelectedBgColor: '#EDF2F7',
    optionHoverBgColor: '#FAFBFC',
    searchFocusBorderColor: '#06b6d4',
}
```

## 🏷️ Label Customization

Below are the default labels. Change the values that you want to customize:

```jsx
{
    leftHeader: 'Options',
    rightHeader: 'Selected',
    searchPlaceholder: 'Search ...',
    add: 'Add',
    addAll: 'Add All',
    remove: 'Remove',
    removeAll: 'Remove All',
}
```

## License

Distributed under the MIT license. See `LICENSE` for more information.
