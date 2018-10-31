import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT'
const FILTER_PRODUCT = 'FILTER_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

/**
 * INITIAL STATE
 */
const defaultProduct = {
  allProducts: [],
  filteredProduct: []
}

/**
 * ACTION CREATORS
 */
const getProduct = product => ({type: GET_PRODUCT, product})
const filterProducts = products => ({type: FILTER_PRODUCT, products})
// const removeProduct = id => ({type: REMOVE_PRODUCT, id})

/**
 * THUNK CREATORS
 */
export const fetchAllProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(getProduct(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const filterProductsByCategory = id => async dispatch => {
  try {
    const res = await axios.get('api/products/associations')
    const associations = res.data
    // for (let association of associations) {
    // if (association.categoryId )
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
