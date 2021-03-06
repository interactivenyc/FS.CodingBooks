import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
class AuthFormLogin extends Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
    const {name, displayName, handleSubmit, error} = this.props
    return (
      <div>
        <div className="ui middle aligned center aligned very padded grid">
          <div className="column">
            <h2 className="ui image header">
                <div className="content">Log In to Your Account</div>
            </h2>
            <form onSubmit={handleSubmit} name={name} className="ui large form">
              <div className="ui stacked secondary  segment">
                <div>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon" />
  
                      <input
                        type="text"
                        name="email"
                        placeholder="E-mail address"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="lock icon" />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                  <div />
                <button
                  type="submit"
                  className="ui padding fluid large teal submit button"
                  style={{marginBottom: '10px'}}
                >
                  {displayName}
                </button>
                <a
                    target="_self"
                    href="/auth/google"
                    className="ui padding fluid large teal submit button"
                  >
                    <i className="fa fa-google" />
  
                    <span>{displayName} with Google</span>
                  </a>
              </div>
            </form>
            {error &&
              error.response && (
                <div className="ui error message"> {error.response.data} </div>
              )}
              <div className="ui message">
                New to us? <Link to="/signup">Register</Link>
              </div>
          </div>
        </div>
      </div>
    )
  }
  
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const method = 'login'
      dispatch(auth({email, password, formName, method}))
      console.log('[auth-form] submit', formName)
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthFormLogin)

/**
 * PROP TYPES
 */
AuthFormLogin.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
