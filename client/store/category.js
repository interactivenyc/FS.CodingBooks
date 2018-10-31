import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CATEGORY = 'GET_CATEGORY'
const SELECT_CATEGORY = 'SELECT_CATEGORY'

/**
 * INITIAL STATE
 */
const defaultCategory = {
  allCategories: [],
  selectedCategory: {}
}

/**
 * ACTION CREATORS
 */
const getCategory = category => ({type: GET_CATEGORY, category})
const selectOneCategory = category => ({type: SELECT_CATEGORY, category})

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

export const selectCategory = categoryId => async dispatch => {
  try {
    const res = await axios.get(`api/products/categories/${categoryId}`)
    dispatch(selectOneCategory(res.data))
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
    case SELECT_CATEGORY:
      return {...state, selectedCategory: action.category}
    default:
      return state
  }
}
