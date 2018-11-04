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
                <a className="image" href={`/users/${id}`}><img src={image}></img></a>
                <div className="content">
                    <a className="header" href="#" onClick={() => getUserInfo(id)}>{firstName} {lastName}</a>                    
                    {adminStatus === false && 
                        <Fragment>
                            <a href="#"><i className="edit icon"></i></a>
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
    // getUserInfo: userId => dispatch(getUserInfo(userId))
})

export default connect(null, mapDispatchToProps)(UserCard)