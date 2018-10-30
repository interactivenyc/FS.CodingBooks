import axios from 'axios'

//action types
const GETALLUSERS = 'GETALLUSERS'

//action creators
const getAllUsers = allUsers => ({
    type: GETALLUSERS,
    payload: allUsers
})

//thunk action creators
export const fetchAllUsers = () => {
    return async dispatch => {
        const { data } = await axios.get('/api/users')
        const action = getAllUsers(data)
        dispatch(action)
    }
}

//reducer
export default function reducer (prevState = [], action) {
    switch (action.type) {
        case GETALLUSERS:
            return [...action.payload]
        default:
            return prevState
    }
}