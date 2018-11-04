import axios from 'axios'

//action types
const GET_ALL_USERS = 'GET_ALL_USERS'
const REMOVE_USER_FROM_LIST = 'REMOVE_USER_FROM_LIST'
// const GET_USER_INFO = 'GET_USER_INFO'

//action creators
const getAllUsers = allUsers => ({
    type: GET_ALL_USERS,
    payload: allUsers
})

const userRemoved = user => ({
    type: REMOVE_USER_FROM_LIST,
    payload: user
})

// const getUserInfo = id => ({
//     type: GET_USER_INFO,
//     payload: id
// })

//thunk action creators
export const fetchAllUsers = () => {
    return async dispatch => {
        const { data } = await axios.get('/api/users')
        const action = getAllUsers(data)
        dispatch(action)
    }
}

export const removeUser = userId => {
    return async dispatch => {
        const {data} = await axios.delete(`/api/users/remove/${userId}`)
        const action = userRemoved(data)
        dispatch(action)
    }
}

//reducer
export default function reducer (prevState = [], action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return [...action.payload]
        // case GET_USER_INFO:
        //     const user = prevState.filter(obj => obj.id === +action.payload)
        //     return [user]
        case REMOVE_USER_FROM_LIST:
            const newUsersArr = prevState.filter(obj => obj.id !== +action.payload)
            return [...newUsersArr]
        default:
            return prevState
    }
}