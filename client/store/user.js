import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_USER_CART = 'GET_USER_CART'
const ADDED_ITEM_TO_CART = 'ADDED_ITEM_TO_CART'
const REMOVED_ITEM_FROM_CART = 'REMOVED_ITEM_FROM_CART'

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
const addedToCart = product => ({type: ADDED_ITEM_TO_CART, product})
const removedFromCart = product => ({type: REMOVED_ITEM_FROM_CART, product})

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

export const addToCart = productId => async dispatch => {
  try {
    const product = await axios.post(`/api/carts/add/${productId}`)
    dispatch(addedToCart(product.data))
  } catch (err) {
    console.error(err)
  }
}

export const removeFromCart = productId => async dispatch => {
  console.log('[user] removeFromCart', productId, defaultUser.cart)
  try {
    const product = await axios.delete(`/api/carts/remove/${productId}`)
    console.log('[user] dispatch removedFromCart', product.data)
    dispatch(removedFromCart(product.data))
  } catch (err) {
    console.error(err)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
    if (res.data) {
      dispatch(fetchUserCart(res.data.cartId))
    }
    localStorage.setItem('cart', JSON.stringify([]))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
obj
) => async dispatch => {
  let res
  const {email, password, method} = obj
  try {
    if (method === 'signup') {
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

    case ADDED_ITEM_TO_CART:
      console.log('ADDED_ITEM_TO_CART', action, state.cart)

      return {...state, cart: [...state.cart, action.product]}
    case REMOVED_ITEM_FROM_CART:
      console.log('REMOVED_ITEM_FROM_CART before', state.cart.length)
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === action.product.productId) {
          console.log('remove item', action.product.productId)

          state.cart.splice(i, 1)
          break
        }
      }
      console.log('REMOVED_ITEM_FROM_CART after', state.cart.length)

      return {...state, cart: [...state.cart]}

    default:
      return state
  }
}
