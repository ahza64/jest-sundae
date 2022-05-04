import { render, screen } from '@testing-library/react'
import SummaryForm from '../SummaryForm'

test('initial conditions', () => {
  render(<SummaryForm />)
  const checkBox = screen.getByRole('checkbox', { name: /terms and conditions/i })
  expect(checkBox).not.toBeChecked()

  const orderButton = screen.getByRole('button', { name: 'Confirm Order' })
  expect(orderButton.textContent).toBe('Confirm Order')
  expect(orderButton).toBeDisabled()
})
