import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App  from '../App'

test('Happy path for the order phases', async () => {
  render(<App />)

  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' })
  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, '1')

  const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' })
  userEvent.clear(chocolateInput)
  userEvent.type(chocolateInput, '2')

  const cherryCheckbox = await screen.findByRole('checkbox', { name: 'Cherries' })
  userEvent.click(cherryCheckbox)

  const orderSummaryButton = screen.getByRole('button', { name: /order sundae/i })
  userEvent.click(orderSummaryButton)

  const summaryHeading = screen.getByRole('heading', { name: 'Order Summary' })
  expect(summaryHeading).toBeInTheDocument()

  const topingsHeading = screen.getByRole('heading', { name: 'Toppings $1.50' })
  expect(topingsHeading).toBeInTheDocument()

  expect(screen.getByText('1 Vanilla')).toBeInTheDocument()
  expect(screen.getByText('2 Chocolate')).toBeInTheDocument()
  expect(screen.getByText(/Cherries/i)).toBeInTheDocument()
  // alternative method to test
  // const optionItems = screen.getAllByRole('listitem')
  // const optionItemsText = optionItems.map((item) => item.textContent)
  // expect(optionItemsText).toEqual(['1 Vanilla', '2 Chocolate', 'Cherries'])
  const tcCheckbox = screen.getByRole('checkbox', { name: /terms and conditions/i })
  userEvent.click(tcCheckbox)

  const confirmOrderButton = screen.getByRole('button', { name: /confirm order/i})
  userEvent.click(confirmOrderButton)

  const loading = screen.getByText(/loading/i)
  expect(loading).toBeInTheDocument()

  const thankYouHeader = await screen.findByRole('heading', { name: /thank you/i })
  expect(thankYouHeader).toBeInTheDocument()

  const notLoading = screen.queryByText(/loading/i)
  expect(notLoading).not.toBeInTheDocument()

  const orderNumber = await screen.findByText(/your order number is/i)
  expect(orderNumber).toBeInTheDocument()

  const newOrderButton = screen.getByRole('button', { name: /new order/i})
  userEvent.click(newOrderButton)

  const scoopsTotal = screen.getByText('Scoops total: $0.00')
  expect(scoopsTotal).toBeInTheDocument()
  const toppingsTotal = screen.getByText('Toppings total: $0.00')
  expect(toppingsTotal).toBeInTheDocument()

  await screen.findByRole('spinbutton', { name: 'Vanilla' })
  await screen.findByRole('checkbox', { name: 'Cherries' })
})
