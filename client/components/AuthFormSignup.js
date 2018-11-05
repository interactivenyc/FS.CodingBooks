import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
class AuthFormSignup extends Component {
  constructor (props) {
    super(props)

  }
  
  render () {
    const {name, displayName, handleSubmit, error} = this.props
    return (
      <div>
        <div className="ui middle aligned center aligned very padded grid">
          <div className="column">
            <h2 className="ui image header">
                <div className="content">Sign Up for a New Account</div>
            </h2>
            <form onSubmit={handleSubmit} name={name} className="ui large form">
              <div className="ui equal width form">

                <div className="fields">
                  <div className="field">
                    <label>Email</label>
                    <input name="email" type="text" placeholder="email" required></input>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password" required></input>
                  </div>
                </div>

                <div className="fields">
                  <div className="field">
                    <label>First name</label>
                    <input name="firstName" type="text" placeholder="First Name" required></input>
                  </div>
                  <div className="field">
                    <label>Last name</label>
                    <input name="lastName" type="text" placeholder="Last Name" required></input>
                  </div>
                </div>

                <div className="fields">
                  <div className="field">
                    <label>Address</label>
                    <input name="address" type="text" placeholder="Address"></input>
                  </div>
                </div>

                <div className="fields">
                  <div className="field">
                    <label>Phone</label>
                    <input name="phone" type="text" placeholder="Phone" maxlength="10"></input>
                  </div>
                </div>

                <div className="fields">
                  <div className="field">
                    <label>Image URL</label>
                    <input name="image" placeholder="Image URL"></input>
                  </div>
                </div>

                <button
                  type="submit"
                  className="ui padding fluid large teal submit button"
                  style={{marginBottom: '10px'}}
                >
                  {displayName}
                </button>
              </div>
  

            </form>
            {error &&
              error.response && (
                <div className="ui error message"> {error.response.data} </div>
              )}
              <div className="ui message">
                Existing User? <Link to="/login">Log In</Link>
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


const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
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
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const address = evt.target.address.value
      const phone = evt.target.phone.value
      const image = evt.target.image.value
      const method = 'signup'
      dispatch(auth({email, password, formName, firstName, lastName, address, phone, image, method}))
    }
  }
}

export const Signup = connect(mapSignup, mapDispatch)(AuthFormSignup)

/**
 * PROP TYPES
 */
AuthFormSignup.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
