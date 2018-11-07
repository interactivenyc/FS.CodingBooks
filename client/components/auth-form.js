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

  return name === 'signup' ? <AuthFormSignup name={name} displayName={displayName} handleSubmit={handleSubmit} error={error} /> : <AuthFormLogin name={name} displayName={displayName} handleSubmit={handleSubmit} error={error} />
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
