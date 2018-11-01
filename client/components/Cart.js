import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const cart = this.props.cart || []
        const products = this.props.products || []

        const masterArr = cart.map(obj => {
            return products[obj.productId - 1]
        }) || []

        const total = masterArr.reduce((acc, elem) => {
            return acc + (+elem.price)
        }, 0)

        return masterArr.length > 0 && (
            <div className="ui container" id="narrow" style={{margin: '20px'}}>
                <table className="ui fixed table">
                    <thead>
                        <tr><th>Name</th>
                        <th>Details</th>
                        <th>Price</th>
                    </tr></thead>
                    <tbody>
                        {masterArr.map(obj => {
                            return (
                                    <tr key={obj.id}>
                                        <td className="ui small image"><img src={obj.photo}></img></td>
                                            <td>
                                                <div>
                                                    <div className="header">{obj.title}</div>
                                                    <div className="meta">
                                                        <span className="price">by This Author</span>
                                                        <span className="stay"></span>
                                                    </div>
                                                    <div className="description">
                                                        <p>qty: 1???</p>
                                                    </div>
                                                </div>
                                            </td>
                                        <td>{obj.price}</td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="content">
                    <p className="ui right aligned header">Total: $ {total}</p>
                    <div className="ui right floated small primary labeled icon button">
                        <i className="shopping bag icon"></i> Check Out
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return ({
        cart: state.user.cart,
        products: state.product
    })
}

export default connect(mapStateToProps)(Cart)