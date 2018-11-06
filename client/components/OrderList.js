import React from 'react'
import {connect} from 'react-redux'
import {fetchAllOrderItems} from '../store/orders'
import SingleOrder from './SingleOrder'

class OrderList extends React.Component {
  componentDidMount() {
    this.props.fetchAllOrderItems(this.props.cartId)
  }

  render() {
    const orderList = [
      {id: 1, payDate: '12/15/18'},
      {id: 2, payDate: '12/16/18'},
      {id: 3, payDate: '12/15/18'},
      {id: 4, payDate: '12/12/18'},
      {id: 5, payDate: '12/12/18'}
    ]
    // const orderList = this.props.allOrderItems;

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
                <div>Ordered on: {orderDate}</div>
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
