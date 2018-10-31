import React from 'react'
import {Link} from 'react-router-dom'

function SingleProductInList(props) {
  return (
    <tr>
      <td>
        <Link to={`/products/${props.id}`}>
          <img src={props.photo} />
        </Link>
      </td>
      <td>
        <Link to={`/products/${props.id}`}>
          <div>{props.title}</div>
        </Link>
        <div>Price: ${props.price}</div>
      </td>
    </tr>
  )
}

export default SingleProductInList
