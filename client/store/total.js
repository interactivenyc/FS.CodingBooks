import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_TOTAL = 'SET_TOTAL'

/**
 * INITIAL STATE
 */
const defaultCategory = ''

/**
 * ACTION CREATORS
 */
const setTotal = total => ({type: SET_TOTAL, total})

/**
 * THUNK CREATORS
 */

export const setCartTotal = total => async dispatch => {
  try {
    dispatch(setTotal(total))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */

export default function(state = defaultCategory, action) {
  switch (action.type) {
    case SET_TOTAL:
      return action.total
    default:
      return state
  }
}
