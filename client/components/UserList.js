import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAllUsers } from '../store/allUsers'

class UserList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllUsers()
    }

    render() {
        const allUsersArr = this.props.allUsers
        return (
            <div>
                <h1>List of Users</h1>
                {allUsersArr.map(obj => {
                    return (
                        <div key={obj.id}>
                            <img src={obj.image}></img>
                            <div>Name: {obj.firstName} {obj.lastName}</div>
                            <div>Email: {obj.email}</div>
                            <div>Phone: {obj.phone}</div>
                            <div>Admin Status: {obj.isAdmin}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allUsers: state.allUsers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)