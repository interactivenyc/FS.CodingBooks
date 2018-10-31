import axios from 'axios'

//action types
const GET_ALL_USERS = 'GET_ALL_USERS'

//action creators
const getAllUsers = allUsers => ({
    type: GET_ALL_USERS,
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
        case GET_ALL_USERS:
            return [...action.payload]
        default:
            return prevState
    }
}