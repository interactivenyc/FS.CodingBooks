import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultProduct = []

/**
 * ACTION CREATORS
 */
const getProduct = product => ({type: GET_PRODUCT, product})
// const removeProduct = id => ({type: REMOVE_PRODUCT, id})

/**
 * THUNK CREATORS
 */
export const allProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

// export const removeProduct = () => async dispatch => {
//   try {
//     await axios.post('/api/products/remove/:id')
//     dispatch(removeProduct(req.params.id))
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */
export default function(state = defaultProduct, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return [...action.product]
    // case REMOVE_USER:
    //   return defaultUser
    default:
      return state
  }
}
