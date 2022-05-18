import SummaryForm from './pages/summary/SummaryForm'
import { useState } from 'react'
import { Container } from 'react-bootstrap'

import OrderConfirmation from './pages/confirmation/OrderConfirmation'
import OrderEntry from './pages/entry/OrderEntry'
import OrderSummary  from './pages/summary/OrderSummary'

import { OrderDetailsProvider } from './context/OrderDetails'

function App() {
  const [orderPhase, setOrderPhase] = useState('inProgress')

  let Component = OrderEntry
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry
      break
    case 'review':
      Component = OrderSummary
      break
    case 'completed':
      Component = OrderConfirmation
      break
    default:
  }

  return (
    <OrderDetailsProvider>
      <Container>
        {<Component setOrderPhase={setOrderPhase} />}
      </Container>
    </OrderDetailsProvider>
  );
}

export default App;
