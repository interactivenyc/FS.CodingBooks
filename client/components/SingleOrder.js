import React from 'react'
import SingleProductInList from './SingleProductInList'

const SingleOrder = props => {
  const order = props.order
  const products = props.products
  let keyIndex = 0

  console.log(order)
  console.log(products)

  const orderProducts = products.reduce((rtn, product) => {
    const inOrder = order.filter(item => {
      return item.productId === product.id
    })
    if (inOrder.length > 0) {
      product.quantity = inOrder.length
      rtn.push(product)
    }
    return rtn
  }, [])

  const total =
    orderProducts.reduce((acc, elem) => {
      acc += Math.floor(elem.price * 100 * elem.quantity)
      return acc
    }, Math.floor(0)) / 100

  return (
    <div className="ui container" id="narrow" style={{margin: '20px'}}>
      <table className="ui fixed table">
        <tbody>
          {orderProducts.map(product => {
            return (
              <React.Fragment key={keyIndex++}>
                <tr>
                  <td>
                    <SingleProductInList
                      context="cart"
                      order={true}
                      productId={product.id}
                      photo={product.photo}
                      title={product.title}
                      price={product.price}
                      quantity={product.quantity}
                    />
                  </td>
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
      <div className="content">
        <p className="ui right aligned header">
          Order Total: $ {total.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default SingleOrder
