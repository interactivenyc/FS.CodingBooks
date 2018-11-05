import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'
import AuthFormLogin from './AuthFormLogin'
import AuthFormSignup from './AuthFormSignup'

/**
 * COMPONENT
 */
export const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  console.log('[ AuthForm ] render', name)

  return name === 'signup' ? <AuthFormSignup name={name} displayName={displayName} handleSubmit={handleSubmit} error={error} /> : <AuthFormLogin name={name} displayName={displayName} handleSubmit={handleSubmit} error={error} />
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.user.error
//   }
// }

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.user.error
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault()
//       const formName = evt.target.name
//       const email = evt.target.email.value
//       const password = evt.target.password.value

//       console.log('[auth-form] submit', formName)

//       if (formName === 'signup') {
//         const firstName = evt.target.firstName.value
//         const lastName = evt.target.lastName.value
//         dispatch(auth(email, password, formName, firstName, lastName))
//       } else {
//         dispatch(auth(email, password, formName))
//       }
//     }
//   }
// }

// export const Login = connect(mapLogin, mapDispatch)(AuthForm)
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
