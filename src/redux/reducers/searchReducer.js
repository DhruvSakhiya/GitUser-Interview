import * as SearchActions from '../actions/searchActions'

let init = {
    searchedBookmarkedUsers: [],
    searchedUsers: [],
    searchText: '',
    searchUserText: ''
}


const searchReducer = (state = init, action) => {
    switch (action.type) {
        case SearchActions.SET_SEARCH_USER: {
            return { ...state, searchedUsers: action.searchedUser }
        }
        case SearchActions.SET_BOOKMARKED_SEARCHED_USER: {
            return { ...state, searchedBookmarkedUsers: action.searchedBookmarkedUsers }
        }
        case SearchActions.SEARCH_TEXT: {
            return { ...state, searchText: action.name }
        }
        case SearchActions.SEARCH_USER_TEXT: {
            return { ...state, searchUserText: action.name }
        }
        case SearchActions.UPDATE_SEARCHED_DATA: {
            return { ...state, searchedBookmarkedUsers: action.searchedBookmarkedUsers }
        }
        case SearchActions.UPDATE_USER_SEARCH_DATA: {
            return { ...state, searchedUsers: action.searchedUsers }
        }
        default:
            return state
    }
}

export default searchReducer
