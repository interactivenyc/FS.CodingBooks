import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../store/user'

class SingleProduct extends React.Component {
  render() {
    let product
    if (this.props.product.length > 0) {
      product = this.props.product.filter(
        prod => prod.id === Number(this.props.match.params.id)
      )[0]
    }

    return (
      <div className="ui container" id="narrow" style={{margin: '20px'}}>
        {product && (
          <div className="ui message center aligned grid">
            <h1 className="ui huge header centered row">{product.title}</h1>
            <img
              className="ui image"
              src={product.photo}
              style={{
                maxHeight: '300px',
                borderRight: '20px',
                alignSelf: 'center'
              }}
            />
            <div
              className="ui left aligned segment nine wide column"
              style={{alignSelf: 'center'}}
            >
              <p>
                <strong>Book Description:</strong> {product.description}
              </p>
              <strong>
                Tags:&nbsp;
                <a className="ui tag label">Javascript</a>
                <a className="ui tag label">Coding</a>
              </strong>
            </div>
            <div className="centered row">
              <div className="ui massive label" style={{alignSelf: 'center'}}>
                Price: ${product.price}
              </div>
              <button
                type="button"
                onClick={() => this.props.addToCart(product.id)}
                className="ui green button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: productId => dispatch(addToCart(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
