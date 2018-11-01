import React from 'react'
import {Link} from 'react-router-dom'

function SingleProductInList(props) {
  const {photo, id, title, price, context} = props
  console.log('[SingleProductInList] context:', context)

  return (
    <div className="item">
      <Link to={`/products/${id}`}>
        <img src={photo} className="ui left floated image" />
      </Link>
      <div className="right-col">
        <div className="productInfo">
          <Link to={`/products/${id}`}>
            <h2>{title}</h2>
          </Link>
          <h3>Price: ${price}</h3>
        </div>
        <div className="my-button">
          {context === 'cart' ? (
            <a className="ui green button">Remove from Cart</a>
          ) : (
            <a className="ui green button">Add to Cart</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleProductInList
