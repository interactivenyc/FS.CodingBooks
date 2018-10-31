import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {NavDropdown, MenuItem} from 'react-bootstrap'
import {selectCategory} from '../store/category'
import SingleProductInList from './SingleProductInList'

class ProductList extends React.Component {
  render() {
    const allProductsArr = this.props.product
    const allCategoriesArr = this.props.allCategory

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
                <SingleProductInList
                  title={product.title}
                  id={product.id}
                  photo={product.photo}
                  price={product.price}
                  key={product.id}
                />
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
