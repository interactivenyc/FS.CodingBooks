import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORDERS = 'GET_ORDERS'

/**
 * INITIAL STATE
 */
const defaultCategory = []

/**
 * ACTION CREATORS
 */
const getOrders = items => ({type: GET_ORDERS, items})

/**
 * THUNK CREATORS
 */

export const fetchAllOrderItems = cartId => async dispatch => {
  try {
    const res = await axios.get(`/api/users/orders/${cartId}`)
    dispatch(getOrders(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultCategory, action) {
  switch (action.type) {
    case GET_ORDERS:
      return [action.items]
    default:
      return state
  }
}
