import React from 'react'
import {connect} from 'react-redux'
import {fetchAllOrderItems} from '../store/orders'
import SingleOrder from './SingleOrder'

class OrderList extends React.Component {
  componentDidMount() {
    console.log(`DOES CARTID EXIST: `, this.props.cartId)
    this.props.fetchAllOrderItems(1)
  }

  render() {
    const orderList = this.props.allOrderItems
    console.log(orderList)

    const uniqueOrder = (function(orderList) {
      let uniqueOrder = []
      for (let order of orderList) {
        if (!uniqueOrder.includes(order.payDate)) {
          uniqueOrder.push(order.payDate)
        }
      }
      return uniqueOrder
    })(orderList)
    return (
      <div>
        <div className="ui container" id="narrow" style={{margin: '20px'}}>
          <div className="ui message left aligned grid">
            <div className="ui list" />
            {uniqueOrder.map(orderDate => (
              <div>
                <div key={orderDate}>Ordered on: {orderDate}</div>
                <SingleOrder
                  products={this.props.products}
                  order={orderList.filter(order => order.payDate === orderDate)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartId: state.user.cartId,
  allOrderItems: state.orders,
  products: state.product
})

const mapDispatchToProps = dispatch => {
  return {
    fetchAllOrderItems: cartId => dispatch(fetchAllOrderItems(cartId))
  }
}

const ConnectedOrderList = connect(mapStateToProps, mapDispatchToProps)(
  OrderList
)

export default ConnectedOrderList
