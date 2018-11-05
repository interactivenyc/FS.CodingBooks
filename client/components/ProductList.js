import React from 'react'
import {connect} from 'react-redux'
import {NavDropdown, MenuItem} from 'react-bootstrap'
import {selectCategory} from '../store/category'
import SingleProductInList from './SingleProductInList'

class ProductList extends React.Component {
  constructor() {
    super()
    this.categorySelect = this.categorySelect.bind(this)
    this.state = {
      categoryId: 0
    }
  }

  categorySelect(categoryId) {
    console.log('[ProductList] categorySelect', categoryId)

    this.setState({
      categoryId
    })
  }
  render() {
    const allProductsArr = this.props.product
    const allCategoriesArr = this.props.allCategory
    let keyIndex = 0

    return (
      <div>
        <NavDropdown title="Select a category to filter" id="nav-dropdown">
          <MenuItem onSelect={() => this.categorySelect(0)}>All</MenuItem>
          {allCategoriesArr.map(category => (
            <MenuItem
              key={category.id}
              onSelect={() => this.categorySelect(category.id)}
            >
              {category.name}
            </MenuItem>
          ))}
        </NavDropdown>
        <div className="ui container" id="narrow" style={{margin: '20px'}}>
          <div className="ui message left aligned grid">
            <div className="ui list">
              {allProductsArr[0] &&
                allProductsArr
                  .filter(product => {
                    return (
                      product.categoryId === this.state.categoryId ||
                      this.state.categoryId === 0
                    )
                  })
                  .map(product => {
                    return (
                      <SingleProductInList
                        title={product.title}
                        context="product-list"
                        productId={product.id}
                        photo={product.photo}
                        price={product.price}
                        categoryId={product.categoryId}
                        key={keyIndex++}
                      />
                    )
                  })}
            </div>
          </div>
        </div>
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
