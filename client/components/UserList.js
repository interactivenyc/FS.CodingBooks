import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAllUsers } from '../store/allUsers'

class UserList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        console.log('LOOK HERE', this.props)
        this.props.fetchAllUsers()
    }
    
    render () {
        return (
            <div>
                <h1>List of Users</h1>
                <div>
                    <div>name</div>
                    <div>address</div>
                    <div>phone</div>
                </div>
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