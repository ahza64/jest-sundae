import { render, screen, fireEvent } from '@testing-library/react'
import SummaryForm from '../SummaryForm'

test('initial conditions', () => {
  render(<SummaryForm />)
  const checkBox = screen.getByRole('checkbox')
  expect(checkBox).not.toBeChecked()

  const orderButton = screen.getByRole('button', { name: /Confirm Order/i })
  expect(orderButton.textContent).toBe('Confirm Order')
  expect(orderButton).toBeDisabled()
})

test('Checkbox enables order button on first click, disables on second click', () => {
  render(<SummaryForm />)
  const checkBox = screen.getByRole('checkbox')
  const orderButton = screen.getByRole('button', { name: /Confirm Order/i })

  fireEvent.click(checkBox)
  expect(orderButton).toBeEnabled()
  fireEvent.click(checkBox)
  expect(orderButton).toBeDisabled()
})
