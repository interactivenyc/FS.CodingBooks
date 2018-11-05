import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CATEGORY = 'GET_CATEGORY'

/**
 * INITIAL STATE
 */
const defaultCategory = {
  allCategories: []
}

/**
 * ACTION CREATORS
 */
const getCategory = category => ({type: GET_CATEGORY, category})

/**
 * THUNK CREATORS
 */

export const fetchAllCategories = () => async dispatch => {
  try {
    const res = await axios.get('/api/products/categories')
    dispatch(getCategory(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultCategory, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {...state, allCategories: action.category}
    default:
      return state
  }
}
