import axios from 'axios'
import { useEffect, useState } from 'react'
import ScoopsOption from './ScoopsOption'
import ToppingOption from './ToppingOption'
import { Row } from 'react-bootstrap'

export default function Options({ optionType }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log("toppings option", optionType);
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO handle error
      })

    // try to fix and learn from at a later time
    // const fetchItems = async () => {
    //   const response = await fetch(`http://localhost:3030/${optionType}`)
    //     //TODO handle error
    //     // console.log("res", response);
    //   setItems(response.data)
    // }
    // fetchItems()
  }, [optionType])

  // TODO ToppingOption for null
  const ItemComponent = optionType === 'scoops' ? ScoopsOption : ToppingOption

  const optionItems = items.map((item) =>  (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))


  return (
    <Row>{optionItems}</Row>
  )
}
