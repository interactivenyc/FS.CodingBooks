import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: 'Name'})
    let {data} = await axios.post('/charge', {
      token: token.id
    })

    console.log(data)
    if (data.status === 'succeeded') console.log('Purchase Complete!')
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
