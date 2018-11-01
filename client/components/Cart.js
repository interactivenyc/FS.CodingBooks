import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import SingleProductInList from './SingleProductInList'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cart =
      this.props.cart || JSON.parse(localStorage.getItem('cart')) || []
    const products = this.props.products || []
    let keyIndex = 0

    console.log(localStorage.getItem('cart'))

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

    const total = masterArr.reduce((acc, elem) => {
      return acc + +elem.price
    }, 0)

    return masterArr.length > 0 ? (
      <div className="ui container" id="narrow" style={{margin: '20px'}}>
        <table className="ui fixed table">
          <tbody>
            <tr>
              {masterArr.map(obj => {
                return (
                  <React.Fragment key={keyIndex++}>
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
                  </React.Fragment>
                )
              })}
            </tr>
          </tbody>
        </table>
        <div className="content">
          <p className="ui right aligned header">
            Current Total: $ {total.toFixed(2)}
          </p>
          <div className="ui right floated small primary labeled icon button">
            <i className="shopping bag icon" /> Check Out
          </div>
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
          <div className="ui right floated small primary labeled icon button">
            <i className="shopping bag icon" /> Check Out
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
