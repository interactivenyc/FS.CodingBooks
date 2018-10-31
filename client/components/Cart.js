import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const arr = ['A Title', 'Another Title']
        const cart = this.props.cart || []
        const products = this.props.products || []
        const masterArr = cart.map(obj => {
            return products[obj.productId - 1]
        })
        console.log('master', masterArr)
        return (
            <Fragment>
                <div className="ui container" id="narrow" style={{margin: '20px'}}>
                    <div className="ui items">
                        {masterArr.map(obj => {
                            return (
                            <div key={obj.id} className="item">         

                                <div className="ui small image">
                                    <img src={obj.photo}></img>
                                </div>

                                <div className="content">
                                    <div className="header">{obj.title}</div>
                                    <div className="meta">
                                        <span className="price">by This Author</span>
                                        <span className="stay"></span>
                                    </div>
                                    <div className="description">
                                        <p>qty: 1</p>
                                    </div>
                                </div>

                                <div className="content">
                                    <p>{obj.price}</p>
                                </div>
                            </div>
                            )            
                        })}
                        <div className="item">
                        <div className="ui small image">
                        </div>
                        <div className="content">
                        </div>
                        <div className="content">
                            <p className="ui header centered row">Total: $500.00</p>
                        </div>
                    <div className="ui right floated small primary labeled icon button">
                        <i className="shopping bag icon"></i> Check Out
                    </div>
                    </div>
                    </div>
                </div>
            </Fragment>
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