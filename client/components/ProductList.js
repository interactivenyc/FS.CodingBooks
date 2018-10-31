import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {allProducts} from '../store/product'

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts()
  }

  render() {
    const allProductsArr = this.props.product
    return (
      <div>
        {allProductsArr.map(product => {
          return (
            <table>
              <tbody>
                <tr>
                  <td>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.photo} />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/product/${product.id}`}>
                      <div>Title: {product.title}</div>
                    </Link>
                    <div>Price: {product.price}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product
})

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () => dispatch(allProducts())
  }
}

const ConnectedProductList = connect(mapStateToProps, mapDispatchToProps)(
  ProductList
)

export default ConnectedProductList
