import React, { Component, Fragment } from 'react'

export default class Cart extends Component {
    constructor() {
        super()

    }

    render() {
        const arr = ['A Title', 'Another Title']
        return (  
        <Fragment>
        <div className="ui container" id="narrow" style={{margin: '20px'}}>
            <div className="ui items">
                {arr.map(obj => {
                    return (
                    <div className="item">         

                        <div className="ui small image">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/515jiKSErDL._SX376_BO1,204,203,200_.jpg"></img>
                        </div>

                        <div className="content">
                            <div className="header">{obj}</div>
                            <div className="meta">
                                <span className="price">by This Author</span>
                                <span className="stay"></span>
                            </div>
                            <div className="description">
                                <p>qty: 1</p>
                            </div>
                        </div>

                        <div className="content">
                            <p>$500.00</p>
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
            <div class="ui right floated small primary labeled icon button">
                <i class="shopping bag icon"></i> Check Out
            </div>
            </div>
            </div>
        </div>
        </Fragment>
        )
    }
}