import { render, screen } from '@testing-library/react'

import Options from '../Options'

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
