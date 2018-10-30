import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Coding Books</h1>

    <div className="ui secondary pointing menu">
      <Link to="/home" className="active item">
        Home
      </Link>
      <Link to="/products" className="item">
        Product List
      </Link>
      <div className="right menu">
        {!isLoggedIn ? (
          <div>
            <Link to="/login" className="ui right labeled icon button">
              <i className="right arrow icon" />
              Log in
            </Link>
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={handleClick}
              className="ui left labeled icon button"
            >
              <i className="left arrow icon" />
              Log Out
            </button>
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
    isLoggedIn: !!state.user.id
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
