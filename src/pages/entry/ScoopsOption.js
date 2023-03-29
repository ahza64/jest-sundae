import { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function ScoopsOption({ name, imagePath, updateItemCount }) {
  const [isValid, setIsValid] = useState(null)

  const handleChange = (event) => {
    const currentValue = event.target.value
    updateItemCount(name, currentValue)
    const currentValueFloat = parseFloat(currentValue)
    const valueIsValid = 0 <= currentValueFloat && currentValueFloat <= 10 && Math.floor(currentValueFloat) === currentValueFloat
    setIsValid(valueIsValid)
    if (valueIsValid) updateItemCount(name, currentValue)
  }



  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`https://jest-sundae-server.onrender.com/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name} scoop`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label column xs='6' style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs='5' style={{ textAlign: 'left' }} >
          <Form.Control
            type='number'
            defaultValue={0}
            onChange={handleChange}
            isInvalid={!isValid}
          />
        </Col>
      </Form.Group>
    </Col>
  )
}
