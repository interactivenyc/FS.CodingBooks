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
const EMPTY_CART = 'EMPTY_CART'

/**
 * INITIAL STATE
 */
const defaultUser = {cart: []}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const getUserCart = cart => ({type: GET_USER_CART, cart})
const addedToCart = product => ({type: ADDED_ITEM_TO_CART, product})
const removedFromCart = product => ({type: REMOVED_ITEM_FROM_CART, product})
const emptyCart = () => ({type: EMPTY_CART})

/**
 * THUNK CREATORS
 */
export const fetchUserCart = cartId => async dispatch => {
  try {
    const localCart = JSON.parse(localStorage.getItem('cart'))
    if (localCart.length > 0) {
      try {
        await axios.post(`/api/carts/combine`, localCart)
        localStorage.setItem('cart', JSON.stringify([]))
      } catch (err) {
        console.error(err)
      }
    }
    const cart = await axios.get(`/api/carts/${cartId}`)
    dispatch(getUserCart(cart.data))
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = productId => async (dispatch, getState) => {
  if (getState().user.id) {
    try {
      const product = await axios.post(`/api/carts/add/${productId}`)
      dispatch(addedToCart(product.data))
    } catch (err) {
      console.error(err)
    }
  } else {
    const localCart = JSON.parse(localStorage.getItem('cart'))
    localCart.push({productId})
    localStorage.setItem('cart', JSON.stringify(localCart))
    dispatch(addedToCart({productId}))
  }
}

export const removeFromCart = productId => async (dispatch, getState) => {
  if (getState().user.id) {
    try {
      const product = await axios.delete(`/api/carts/remove/${productId}`)
      dispatch(removedFromCart(product.data))
    } catch (err) {
      console.error(err)
    }
  } else {
    const localCart = JSON.parse(localStorage.getItem('cart'))
    for (let i = 0; i < localCart.length; i++) {
      if (localCart[i].productId === productId) {
        localCart.splice(i, 1)
        break
      }
    }
    localStorage.setItem('cart', JSON.stringify(localCart))
    dispatch(removedFromCart({productId}))
  }
}

export const clearCart = (cartId, userId, itemsInCart) => async dispatch => {
  try {
    userId ? await axios.put('/api/carts/purchase', {
      cartId,
      itemsInCart
    }) : localStorage.setItem('cart', JSON.stringify([]))
    dispatch(emptyCart())
  } catch(err) {
    console.error(err)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
    if (res.data) {
      dispatch(fetchUserCart(res.data.cartId))
    } else if (!localStorage.cart) {
      localStorage.setItem('cart', JSON.stringify([]))
      dispatch(getUserCart([]))
    } else {
      const localCart = JSON.parse(localStorage.getItem('cart'))
      dispatch(getUserCart(localCart))
    }
  } catch (err) {
    console.error(err)
  }
}

export const auth = obj => async dispatch => {
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
      return {...state, cart: [...state.cart, action.product]}
    case REMOVED_ITEM_FROM_CART:
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productId === action.product.productId) {
          state.cart.splice(i, 1)
          break
        }
      }
      return {...state, cart: [...state.cart]}
    case EMPTY_CART:
      return {...state, cart: []}
    default:
      return state
  }
}
