import * as UserActions from '../actions/userActions'

let init = {
    users: [],
    loading: false,
    bookMarkedUsers: [],
    innerLoader: false,
    refreshingLoader: false,
}

const UserReducer = (state = init, action) => {
    switch (action.type) {
        case UserActions.SET_USERS: {
            return { ...state, users: state.users.concat(action.users), loading: false }
        }
        case UserActions.SET_BOOK_MARK_USER: {
            return { ...state, users: action.users, bookMarkedUsers: action.bookMarkedUsers }
        }
        case UserActions.SET_INNER_LOADER: {
            return { ...state, innerLoader: action.innerLoader }
        }
        case UserActions.REFRESH_USER_LOADING: {
            return { ...state, refreshingLoader: true }
        }
        case UserActions.SET_REFRESH_USER: {
            return { ...state, refreshingLoader: false, users: action.user }
        }
        case UserActions.SET_LOADING: {
            return { ...state, loading: true }
        }
        case UserActions.RESET_USERS:{
            return {...state,users:[]}
        }
        default:
            return state
    }
}

export default UserReducer

