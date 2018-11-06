import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import SingleProductInList from './SingleProductInList'
import {Link} from 'react-router-dom'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cart = this.props.cart || []
    const products = this.props.products || []
    let keyIndex = 0

    let masterArr =
      cart.map(item => {
        return products.filter(product => product.id === item.productId)[0]
      }) || []

    masterArr = masterArr.reduce(function(rtn, item) {
      if (rtn.filter(n => n.id === item.id).length > 0) {
        rtn.forEach((prod, idx) => {
          if (prod.id === item.id) {
            rtn[idx].quantity++
          }
        })
      } else {
        item.quantity = 1
        rtn.push(item)
      }
      return rtn
    }, [])

    const total =
      masterArr.reduce((acc, elem) => {
        acc += Math.floor(elem.price * 100 * elem.quantity)
        return acc
      }, Math.floor(0)) / 100

    return masterArr.length > 0 ? (
      <div className="ui container" id="narrow" style={{margin: '20px'}}>
        <table className="ui fixed table">
          <tbody>
            {masterArr.map(obj => {
              return (
                <React.Fragment key={keyIndex++}>
                  <tr>
                    <td>
                      <SingleProductInList
                        context="cart"
                        productId={obj.id}
                        photo={obj.photo}
                        title={obj.title}
                        price={obj.price}
                        quantity={obj.quantity}
                      />
                    </td>
                  </tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
        <div className="content">
          <p className="ui right aligned header">
            Current Total: $ {total.toFixed(2)}
          </p>
          <Link to={{pathname: '/checkout', total: total, itemsInCart: masterArr}}>
            <div className="ui right floated small primary labeled icon button">
              <i className="shopping bag icon" /> Check Out
            </div>
          </Link>
        </div>
      </div>
    ) : (
      <div className="ui container" id="narrow" style={{margin: '20px'}}>
        <table className="ui fixed table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Details</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>Alas, your cart is empty</td>
              <td />
            </tr>
          </tbody>
        </table>
        <div className="content">
          <p className="ui right aligned header">Total: $ 0.00</p>
          <div
            className="ui right floated small primary labeled icon button"
            onClick={event => {
              event.preventDefault()
              alert('Please add at least one item to cart before checking out')
            }}
          >
            <i className="shopping bag icon" /> Checkout
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.user.cart,
    products: state.product
  }
}

export default connect(mapStateToProps)(Cart)
