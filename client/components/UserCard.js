import React, { Component } from 'react'

export default class UserCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { image, firstName, lastName, adminStatus, email } = this.props

        const admin = (adminStatus) => {
            if (adminStatus) {
                return 'ADMIN'
            }
        }

        return (
            <div className="ui card">
                <a className="image" href="#"><img src={image}></img></a>
                <div className="content">
                    <a className="header" href="#">{firstName} {lastName}</a>
                    <i className="edit icon"></i>
                    <i className="trash alternate icon"></i>
                    <div className="meta">
                        <a>{admin(adminStatus)}</a>
                    </div>
                </div>
            </div>
        )
    }

}