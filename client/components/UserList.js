import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import UserCard from './UserCard'

class UserList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const allUsersArr = this.props.allUsers
        return (
            <Fragment>
                <h1>List of Users</h1>
                <div className="ui six doubling cards">
                    {allUsersArr.map(obj => {
                        return <UserCard key={obj.id} image={obj.image} firstName={obj.firstName} lastName={obj.lastName} adminStatus={obj.isAdmin} email={obj.email} />
                    })}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        allUsers: state.allUsers
    }
}

export default connect(mapStateToProps)(UserList)