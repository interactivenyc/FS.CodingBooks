import React from 'react'

export default function CartItem(props) {
  const {photo, title, price, quantity} = props
  return (
    <tr>
      <td className="ui small image">
        <img src={photo} />
      </td>
      <td>
        <div>
          <div className="header">{title}</div>
          <div className="meta">
            <span className="price">by This Author</span>
            <span className="stay" />
          </div>
          <div className="description">
            <p>Quantity: {quantity}</p>
          </div>
        </div>
      </td>
      <td>$ {price}</td>
    </tr>
  )
}
