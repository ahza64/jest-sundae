import userEvent from '@testing-library/user-event'
import { render, screen } from '../../../test-utils/testing-library-utils'

import Options from '../Options'
import { OrderDetailsProvider } from '../../../context/OrderDetails'

test('displays image for each scoop option from the server', async () => {
  render(<Options optionType="scoops" />)

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  const altText = scoopImages.map(element => element.alt)
  expect(altText).toEqual([ "Chocolate scoop", "Vanilla scoop" ])
})

test('Displays image for each topping option from the server', async () => {
  render(<Options optionType='toppings' />)

  const toppingImages = await screen.findAllByRole('img', { name: /topping$/i })
  expect(toppingImages).toHaveLength(3)

  const imageTitles = toppingImages.map(img => img.alt)
  expect(imageTitles).toEqual([
    'Cherries topping',
    'MnMs topping',
    'Hot Fudge topping'
  ])
})

test('if scoops invalid input is changing the total', async () => {
  render(<Options optionType="scoops" />)

  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' })
  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, '-1')

  const scoopsSubtotal = screen.getByText('Scoops')
  expect(scoopsSubtotal).toBeInTheDocument()
})
