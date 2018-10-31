import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, email}) => (
  <div>
    <h1>Coding Books</h1>

    <div className="ui secondary pointing menu">
      <Link to="/home" className="item">
        Home
      </Link>
      <Link to="/products" className="item">
        Product List
      </Link>
      <div className="right menu">
        {!isLoggedIn ? (
          <div>
            <Link to="/login" className="item">
              Log in
            </Link>
          </div>
        ) : (
          <div>
            <Link to="#" onClick={handleClick} className="item">
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email
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
