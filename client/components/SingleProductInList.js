import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../store/user'

function SingleProductInList(props) {
  const {photo, productId, title, price, context, quantity} = props

  return (
    <div className="item">
      <Link to={`/products/${productId}`}>
        <img src={photo} className="ui left floated image" />
      </Link>
      <div className="right-col">
        <div className="productInfo">
          <Link to={`/products/${productId}`}>
            <h2>{title}</h2>
          </Link>
          <h3>Price: ${price}</h3>
          <h3>productId: {productId}</h3>
        </div>
        <div className="my-button">
          {context === 'cart' ? (
            <React.Fragment>
              <div className="description">
                <p>Quantity: {quantity}</p>
              </div>

              <button
                type="button"
                onClick={() => props.removeFromCart(props.productId)}
                className="ui green button"
              >
                Remove from Cart
              </button>
            </React.Fragment>
          ) : (
            <button
              type="button"
              onClick={() => props.addToCart(props.productId)}
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
    addToCart: productId => dispatch(addToCart(productId)),
    removeFromCart: productId => dispatch(removeFromCart(productId))
  }
}

export default connect(null, mapDispatchToProps)(SingleProductInList)
