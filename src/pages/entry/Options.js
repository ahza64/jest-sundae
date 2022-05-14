import axios from 'axios'
import { useEffect, useState } from 'react'
import ScoopsOption from './ScoopsOption'
import ToppingOption from './ToppingOption'
import { Row } from 'react-bootstrap'
import AlertBanner from '../common/AlertBanner'
import { pricePerItem } from '../../constants'
import { useOrderDetails } from '../../context/OrderDetails'

export default function Options({ optionType }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  const [orderDetails, updateItemCount] = useOrderDetails()

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true))

    // try to fix and learn from at a later time
    // const fetchItems = async () => {
    //   const response = await fetch(`http://localhost:3030/${optionType}`)
    //     //TODO handle error
    //     // console.log("res", response);
    //   setItems(response.data)
    // }
    // fetchItems()
  }, [optionType])

  if (error) {
    return <AlertBanner />
  }

  // TODO ToppingOption for null
  const ItemComponent = optionType === 'scoops' ? ScoopsOption : ToppingOption
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()

  const optionItems = items.map((item) =>  (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ))


  return (
    <>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  )
}
