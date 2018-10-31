import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {NavDropdown, MenuItem} from 'react-bootstrap'

class ProductList extends React.Component {
  render() {
    const allProductsArr = this.props.product
    const allCategoriesArr = this.props.category
    console.log(allCategoriesArr)

    return (
      <div>
        <NavDropdown title="Select a category to filter" id="nav-dropdown">
          {allCategoriesArr.map(category => (
            <MenuItem key={category.id}>{category.name}</MenuItem>
          ))}
        </NavDropdown>
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
  product: state.product,
  category: state.category
})

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchAllProducts: () => dispatch(allProducts())
//   }
// }

const ConnectedProductList = connect(mapStateToProps, null)(ProductList)

export default ConnectedProductList
