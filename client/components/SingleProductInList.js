import React from 'react'
import {Link} from 'react-router-dom'

function SingleProductInList(props) {
  const {photo, id, title, price} = props
  return (
    <tr className="item">
      <td>
        <Link to={`/products/${id}`}>
          <img src={photo} />
        </Link>
      </td>
      <td className="content">
        <Link to={`/products/${id}`}>
          <h3>{title}</h3>
        </Link>
        Price: ${price}
      </td>
    </tr>
  )
}

export default SingleProductInList
