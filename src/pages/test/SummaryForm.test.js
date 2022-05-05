import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  userEvent.click(checkBox)
  expect(orderButton).toBeEnabled()
  userEvent.click(checkBox)
  expect(orderButton).toBeDisabled()
})

test('popover responds to mouse hover', () => {
  render(<SummaryForm />)
  const nullPopover = screen.queryByText(/no ice cream will be delivered/i)
  expect(nullPopover).not.toBeInTheDocument()
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  userEvent.hover(termsAndConditions)
  const popover = screen.queryByText(/no ice cream will be delivered/i)
  expect(popover).toBeInTheDocument()
  userEvent.unhover(termsAndConditions)
  const nullPopoverAgain = screen.getByText(/no ice cream will be delivered/i)
  expect(nullPopoverAgain).not.toBeInTheDocument()
})
