import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ProductList extends React.Component {
  // componentDidMount() {
  //   this.props.fetchAllProducts()
  // }

  render() {
    const allProductsArr = this.props.product
    return (
      <div>
        <table>
          <tbody>
            {allProductsArr.map(product => {
              return (
                <tr key={product.id}>
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
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product
})

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchAllProducts: () => dispatch(allProducts())
//   }
// }

const ConnectedProductList = connect(mapStateToProps, null)(ProductList)

export default ConnectedProductList
