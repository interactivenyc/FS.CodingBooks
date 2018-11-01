import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../store/user'

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
            <button
              type="button"
              onClick={() => props.removeFromCart(props.id)}
              className="ui green button"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              type="button"
              onClick={() => props.addToCart(props.id)}
              className="ui green button"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: id => dispatch(addToCart(id)),
    removeFromCart: id => dispatch(removeFromCart(id))
  }
}

export default connect(null, mapDispatchToProps)(SingleProductInList)
