import React, {Component} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class CheckoutPage extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_5cuklndlVTMNVNJp1kOPk01G">
        <div className="example">
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product,
  allCategory: state.category.allCategories,
  selectedCategory: state.category.selectedCategory
})

export default CheckoutPage
