import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {NavDropdown, MenuItem} from 'react-bootstrap'
import {selectCategory} from '../store/category'

class ProductList extends React.Component {
  render() {
    const allProductsArr = this.props.product
    const allCategoriesArr = this.props.allCategory
    const selectedCategory = this.props.selectedCategory

    return (
      <div>
        <NavDropdown title="Select a category to filter" id="nav-dropdown">
          {allCategoriesArr.map(category => (
            <MenuItem
              key={category.id}
              onSelect={() => this.props.selectCategory(category.id)}
            >
              {category.name}
            </MenuItem>
          ))}
        </NavDropdown>
        <br />
        <table>
          <tbody>
            {allProductsArr.map(product => {
              return (
                <tr key={product.id}>
                  <td>
                    <Link to={`/products/${product.id}`}>
                      <img src={product.photo} />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/products/${product.id}`}>
                      <div>{product.title}</div>
                    </Link>
                    <div>Price: ${product.price}</div>
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
  allCategory: state.category.allCategories,
  selectedCategory: state.category.selectedCategory
})

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: id => dispatch(selectCategory(id))
  }
}

const ConnectedProductList = connect(mapStateToProps, mapDispatchToProps)(
  ProductList
)

export default ConnectedProductList
