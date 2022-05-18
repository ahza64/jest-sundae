import { Button } from 'react-bootstrap'
import Options from './Options'
import { useOrderDetails } from '../../context/OrderDetails'

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails()
  return(
    <div>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand Total: {orderDetails.totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase('review')}>Order Sundae!</Button>
    </div>
  )
}
