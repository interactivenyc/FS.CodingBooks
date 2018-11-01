import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_USER_CART = 'GET_USER_CART'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const getUserCart = cart => ({type: GET_USER_CART, cart})

/**
 * THUNK CREATORS
 */
export const fetchUserCart = cartId => async dispatch => {
  try {
    const cart = await axios.get(`/api/carts/${cartId}`)
    dispatch(getUserCart(cart.data))
  } catch (err) {
    console.error(err)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
    if (res.data) dispatch(fetchUserCart(res.data.cartId))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
obj
) => async dispatch => {
  let res
  const {email, password, method} = obj
  console.log('GOT TO AUTH DISPATCH. USER.JS. method: ', obj)
  try {
    if (method === 'signup') {
      console.log('IN SIGN IN AXIOS')
      res = await axios.post(`/auth/${method}`, obj)
    } else {
      res = await axios.post(`/auth/${method}`, {email, password})
    }
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    dispatch(fetchUserCart(res.data.cartId))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case GET_USER_CART:
      return {...state, cart: action.cart}
    default:
      return state
  }
}
