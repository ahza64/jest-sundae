import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useOrderDetails } from '../../context/OrderDetails'

export default function OrderConfirmation({ setOrderPhase }) {
  const [ , , resetOrder] = useOrderDetails()
  const [orderNumber, setOrderNumber] = useState(null)

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((response) => {
        setOrderNumber(response.data.orderNumber)
      })
      .catch((err) => {
        // <TODO>err handler</TODO>
      })
  }, [])

  function handleClick() {
    resetOrder()
    setOrderPhase('inProgress')
  }

  if (orderNumber) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: '25%' }}>not a real app so nothing will actually happen</p>
        <Button onClick={handleClick}>Create new order</Button>
      </div>
    )
  }else{
    return (
      <div>
        Loading...
      </div>
    )
  }
}
