import React, { Component } from 'react'

export default class UserCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { image, firstName, lastName, adminStatus, email } = this.props
        return (
            <div className="ui card">
                <a className="image" href="#"><img src={image}></img></a>
                <div className="content">
                    <a className="header" href="#">{firstName} {lastName}</a>
                    <div className="meta">
                        <a>{email}</a>
                    </div>
                    <i className="edit icon"></i>
                    <i className="trash alternate icon"></i>
                </div>
            </div>
        )
    }

}