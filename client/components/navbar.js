import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, user}) => {
  return (
    <div className="bgBlue">
      <div className="ui secondary menu bgBlue">
        <h2 className="navHeader">Coding Books</h2>
        <Link to="/home" className="item rollover">
          Home
        </Link>
        <Link to="/products" className="item rollover">
          Product List
        </Link>
        {isLoggedIn && (
          <Link to="/orders" className="item rollover">
            Orders
          </Link>
        )}
        {user.isAdmin ? (
          <a href="/users" className="item rollover">
            Users
          </a>
        ) : (
          <React.Fragment />
        )}

        <div className="ui secondary menu right bgBlue rightMenu">
          {!isLoggedIn ? (
            <React.Fragment>
              <Link to="/cart" className="item rollover">
                <i className="shopping cart icon" />
              </Link>
              <Link to="/login" className="item rollover">
                Log in
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/cart" className="item rollover">
                <i className="shopping cart icon" />
              </Link>
              <Link to="#" onClick={handleClick} className="item rollover">
                Log Out
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
