import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'
import history from '../history'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    try {
      let {token} = await this.props.stripe.createToken({name: 'Name'})
      if (!token) {
        alert(
          'It appears your credit card information is invalid, please try again with correct card information.'
        )
        throw 'card invalid'
      }
      await axios.post('/charge', {
        token: token.id,
        amount: (this.props.total * 100).toFixed(0),
        description: 'Cart transaction'
      })
      history.push('/paymentSuccessful')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="checkout">
        <h2>
          Please provide your credit card information below to complete your
          order
        </h2>
        <div>
          <CardElement />
        </div>
        <a className="ui huge green button" onClick={this.submit}>
          Complete purchase
        </a>
      </div>
    )
  }
}
export default injectStripe(CheckoutForm)
