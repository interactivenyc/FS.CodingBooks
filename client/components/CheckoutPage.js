import React, {Component} from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class CheckoutPage extends Component {
  render() {
    const total = this.props.location.total
    const itemsInCart = this.props.location.itemsInCart
    return (
      <StripeProvider apiKey="pk_test_Jq3uSSYBeOH1knjLyuv0fvJd">
        <div className="example">
          <Elements>
            <CheckoutForm total={total} itemsInCart={itemsInCart}/>
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
