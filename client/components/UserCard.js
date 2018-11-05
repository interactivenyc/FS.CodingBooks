import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { removeUser, getUserInfo } from '../store/allUsers.js'

class UserCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, image, firstName, lastName, adminStatus, email, removeUser } = this.props

        const admin = (adminStatus) => {
            if (adminStatus) {
                return 'ADMIN'
            }
        }

        return (
            <div className="ui card">
                <div className="image"><img src={image}></img></div>
                <div className="content">
                    <div className="header">{firstName} {lastName}</div>                
                    {adminStatus === false && 
                        <Fragment>
                            <a href="#" onClick={() => removeUser(id)}><i className="trash alternate icon"></i></a>
                        </Fragment>}
                    <div className="meta">
                        <a>{admin(adminStatus)}</a>
                    </div>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    removeUser: userId => dispatch(removeUser(userId))
})

export default connect(null, mapDispatchToProps)(UserCard)