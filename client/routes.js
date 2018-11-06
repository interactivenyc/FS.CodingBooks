import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import ConnectedProductList from './components/ProductList'
import UserList from './components/UserList'
import {me} from './store'
import {fetchAllUsers} from './store/allUsers'
import {fetchAllProducts} from './store/product'
import {fetchAllCategories} from './store/category'
import {fetchAllOrderItems} from './store/orders'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import CheckoutPage from './components/CheckoutPage'
import paymentSuccessful from './components/PaymentSuccessful'
import ConnectedOrderList from './components/OrderList'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={UserHome} />
        <Route path="/home" component={UserHome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={ConnectedProductList} />
        <Route exact path="/users" component={UserList} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/paymentSuccessful" component={paymentSuccessful} />
        <Route path="/orders" component={ConnectedOrderList} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  // console.log('ROUTER MAP STATE', state)
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    async loadInitialData() {
      await dispatch(fetchAllProducts())
      await dispatch(me())
      await dispatch(fetchAllUsers())
      await dispatch(fetchAllCategories())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
