import { render, screen } from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import Options from '../Options'
import { OrderDetailsProvider } from '../../../context/OrderDetails'

test('update scoops total when scoops is updated', async () => {
  render(<Options optionType="scoops" />)
  const scoopsSubtotal = screen.getByText( 'Scoops Total: $', { exact: false })
  expect(scoopsSubtotal).toHaveTextContent('0.00')

  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' })
  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, '1')
  expect(scoopsSubtotal).toHaveTextContent('2.00')

  const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' })
  userEvent.clear(chocolateInput)
  userEvent.type(chocolateInput, '2')
  expect(scoopsSubtotal).toHaveTextContent('6.00')
})

test('update toppings total when toppings is updated', async () => {
  render(<Options optionType="toppings" />)
  const toppingsSubtotal = screen.getByText( 'Toppings Total: $', { exact: false })
  expect(toppingsSubtotal).toHaveTextContent('0.00')

  const cherriesCheckbox = await screen.findByRole('checkbox', { name: 'Cherries' })
  userEvent.click(cherriesCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('1.50')

  const hotFudgeCheckbox = await screen.findByRole('checkbox', { name: 'Hot Fudge' })
  userEvent.click(hotFudgeCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('3.00')

  userEvent.click(hotFudgeCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('1.50')
})
