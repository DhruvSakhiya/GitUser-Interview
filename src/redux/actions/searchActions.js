export const SET_SEARCH_USER = 'SET_SEARCH_USER'
export const SET_BOOKMARKED_SEARCHED_USER = 'SET_BOOKMARKED_SEARCHED_USER'
export const SEARCH_TEXT = `SEARCH_TEXT`
export const SEARCH_USER_TEXT = 'SEARCH_USER_TEXT'
export const UPDATE_SEARCHED_DATA = 'UPDATE_SEARCHED_DATA'
export const UPDATE_USER_SEARCH_DATA = 'UPDATE_USER_SEARCH_DATA'


export const searchUser = (name, isBookMarkedSearch) => {
    return async (dispatch, getState) => {
        try {
            const { users, bookMarkedUsers } = getState().users
            if (isBookMarkedSearch) {
                const searchUser = bookMarkedUsers.filter((user) => {
                    const { login } = user;
                    const nameCompare = login.toLowerCase();
                    const nameSearch = name.toLowerCase();
                    return nameCompare.includes(nameSearch)
                })
                dispatch({ type: SET_BOOKMARKED_SEARCHED_USER, searchedBookmarkedUsers: searchUser })
            }
            else {
                const searchUser = users.filter((user) => {
                    const { login } = user;
                    const nameCompare = login.toLowerCase();
                    const nameSearch = name.toLowerCase();
                    return nameCompare.includes(nameSearch)
                })
                dispatch({ type: SET_SEARCH_USER, searchedUser: searchUser })
            }
        }
        catch (e) {
            console.log('exception is generated', e)
        }
    }
}

export const setSearchText = (name) => ({ type: SEARCH_TEXT, name: name })
export const setUserSearchText = (name) => ({ type: SEARCH_USER_TEXT, name: name })