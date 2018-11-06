import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'
import history from '../history'
import {connect} from 'react-redux'
import {clearCart} from '../store/user'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    const { userId, cartId, cart } = this.props
    try {
      let {token} = await this.props.stripe.createToken({name: 'Name'})
      if (!token) {
        alert(
          'It appears your credit card information is invalid, please update card information highlighted in red'
        )
        throw 'card invalid'
      }
      await axios.post('/charge', {
        token: token.id,
        amount: (this.props.total * 100).toFixed(0),
        description: 'Cart transaction'
      })
      this.props.clearCart(cartId, userId)
      history.push('/paymentSuccessful')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="checkout">
        <div>
          {this.props.total > 0 ? (
            <div>
              <h2>
                Please provide your credit card information below to complete
                your order.<br />
              </h2>
              <h4>You will be charged ${this.props.total.toFixed(2)}</h4>
              <div>
                <CardElement />
              </div>
              <a className="ui huge green button" onClick={this.submit}>
                Complete purchase
              </a>
            </div>
          ) : (
            <h2>Looks like you don't have any item in your card yet</h2>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  cartId: state.user.cartId,
  cart: state.user.cart,
})

const mapDispatchToProps = dispatch => ({
  clearCart: (cartId, userId) => dispatch(clearCart(cartId, userId))
})


export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(CheckoutForm))