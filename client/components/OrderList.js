import React from 'react'
import { connect } from 'react-redux'
import SingleOrder from './SingleOrder'
import axios from 'axios'

class OrderList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderList: []
    }
  }

  async componentDidMount() {
    if (this.props.cartId) {
      const { data } = await axios.get(`/api/users/orders/${this.props.cartId}`)
      this.setState({ orderList: data })
      console.log(this.state.orderList)
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.cartId !== prevProps.cartId) {
      const { data } = await axios.get(`/api/users/orders/${this.props.cartId}`)
      this.setState({ orderList: data })
      console.log(this.state.orderList)
    }
  }

  render() {
    const uniqueOrder = (function (orderList) {
      let uniqueOrder = []
      for (let order of orderList) {
        if (!uniqueOrder.includes(order.payDate)) {
          uniqueOrder.push(order.payDate)
        }
      }
      return uniqueOrder
    })(this.state.orderList)

    return (
      <div>
        {this.state.orderList.length > 0 ? (
          <div className="ui container" id="narrow" style={{ margin: '20px' }}>
            <div className="ui list" />
            {uniqueOrder.map(orderDate => (
              <div key={orderDate}>
                <div>Ordered on: {orderDate}</div>
                <SingleOrder
                  products={this.props.products}
                  order={this.state.orderList.filter(
                    order => order.payDate === orderDate
                  )}
                />
              </div>
            ))}
          </div>
        ) : (
            <div className="listingHeader">You have not placed any orders</div>
          )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartId: state.user.cartId,
  products: state.product
})

const ConnectedOrderList = connect(mapStateToProps)(OrderList)

export default ConnectedOrderList
