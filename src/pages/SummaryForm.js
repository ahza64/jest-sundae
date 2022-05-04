import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function SummaryForm() {
  const [orderChecked, setOrderChecked] = useState(false)
  const checkBoxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}>terms and conditions</span>
    </span>
  )

  return (
    <div>
      <Form>
        <Form.Group conrtolId='terms-and-conditions'>
          <Form.Check
            type="checkbox"
            label={checkBoxLabel}
            onChange={(e) => setOrderChecked(e.target.checked)}
            checked={orderChecked}
          />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={!orderChecked}>
          Confirm Order
        </Button>
      </Form>
    </div>
  )
}
