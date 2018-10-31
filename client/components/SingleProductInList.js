import React from 'react'
import {Link} from 'react-router-dom'

function SingleProductInList(props) {
  const {photo, id, title, price} = props
  return (
    <tr>
      <td>
        <Link to={`/products/${id}`}>
          <img src={photo} />
        </Link>
      </td>
      <td>
        <Link to={`/products/${id}`}>
          <div>{title}</div>
        </Link>
        <div>Price: ${price}</div>
      </td>
    </tr>
  )
}

export default SingleProductInList
