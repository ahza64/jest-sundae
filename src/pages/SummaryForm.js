import { useState } from 'react'
import { Form, Button, Popover, OverlayTrigger } from 'react-bootstrap'

export default function SummaryForm() {
  const [orderChecked, setOrderChecked] = useState(false)

  const popover = (
    <Popover>
      <Popover.Body>
        No ice cream will be delivered
      </Popover.Body>
    </Popover>
  )

  const checkBoxLabel = (
    <span>
    I agree to
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}>terms and conditions</span>
      </OverlayTrigger>
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
