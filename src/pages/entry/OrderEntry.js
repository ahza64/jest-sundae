import { Button } from 'react-bootstrap'
import Options from './Options'
import { useOrderDetails } from '../../context/OrderDetails'

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails()

  const orderDisabled = orderDetails.totals.scoops === '$0.00'

  return(
    <div>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand Total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase('review')}>Order Sundae!</Button>
    </div>
  )
}
