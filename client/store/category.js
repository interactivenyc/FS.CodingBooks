import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CATEGORY = 'GET_CATEGORY'

/**
 * INITIAL STATE
 */
const defaultProduct = []

/**
 * ACTION CREATORS
 */
const getCategory = category => ({type: GET_CATEGORY, category})
// const removeProduct = id => ({type: REMOVE_PRODUCT, id})

/**
 * THUNK CREATORS
 */

export const fetchAllCategories = () => async dispatch => {
  try {
    const res = await axios.get('api/products/categories')
    dispatch(getCategory(res.data))
  } catch (err) {
    console.error(err)
  }
}
/**
 * REDUCER
 */
export default function(state = defaultProduct, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return [...action.category]
    // case REMOVE_USER:
    //   return defaultUser
    default:
      return state
  }
}
