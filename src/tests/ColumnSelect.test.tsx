import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render } from '@testing-library/react'
import { toHaveNoViolations, axe } from 'jest-axe'
import ColumnSelect from '../ColumnSelect'

expect.extend(toHaveNoViolations)

it('passes a11y test', async () => {
  const container = render(<ColumnSelect options={[]} />).container
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
