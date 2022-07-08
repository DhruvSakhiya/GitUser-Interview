import { UPDATE_SEARCHED_DATA, UPDATE_USER_SEARCH_DATA } from "./searchActions"
import fixtures from "../../fixtures"

export const SET_USERS = 'SET_USERS'
export const GET_USERS = 'GET_USERS'
export const SET_BOOK_MARK_USER = 'SET_BOOK_MARK_USER'
export const SET_INNER_LOADER = 'SET_INNER_LOADER'
export const SET_REFRESH_USER = 'SET_REFRESH_USER'
export const REFRESH_USER_LOADING = 'REFRESH_USER_LOADING'
export const SET_LOADING = 'SET_LOADING'
export const RESET_USERS = 'RESET_USERS'


export const getUser = (currentPage, innerLoader, refresh, mainLoader) => {
    return async (dispatch, getState) => {
        try {
            const { bookMarkedUsers } = getState().users
            if (innerLoader) {
                dispatch({ type: SET_INNER_LOADER, innerLoader: true })
            }
            if (refresh) {
                dispatch({ type: REFRESH_USER_LOADING })
            }
            if (mainLoader) {
                dispatch({ type: SET_LOADING })
            }
            fetch(`https://api.github.com/users?since=${currentPage}&per_page=${fixtures.perPageRecord}`, { method: 'GET' }).
                then((response) => response.json()).
                then((data) => {
                    const newUsers = data.map((user) => {
                        const alreadyBookmarkedArray = bookMarkedUsers.filter((ele) => ele.login == user.login)
                        if (alreadyBookmarkedArray.length > 0) {
                            return { ...user, isBookMarked: true }
                        }
                        else {
                            return { ...user, isBookMarked: false }
                        }
                    })
                    if (refresh) {
                        dispatch({ type: SET_REFRESH_USER, user: newUsers })
                    }
                    else {
                        dispatch({ type: SET_USERS, users: newUsers })
                        dispatch({ type: SET_INNER_LOADER, innerLoader: false })
                    }
                }).
                catch((e) => {
                    dispatch({ type: SET_USERS, users: [] })
                    dispatch({ type: SET_INNER_LOADER, innerLoader: false })
                })
        }
        catch (e) {
            dispatch({ type: SET_USERS, users: [] })
            dispatch({ type: SET_INNER_LOADER, innerLoader: false })
        }
    }
}

export const toggleBookMark = (item, index) => {
    return async (dispatch, getState) => {
        try {
            const { users, bookMarkedUsers } = getState().users
            const { searchedUsers } = getState().search
            let newUsers = [...users]
            let newBookMarkedUsers = [...bookMarkedUsers];
            const newData = { ...item, isBookMarked: !item.isBookMarked }
            newUsers = newUsers.map((user) => {
                if (user.login == item.login) {
                    return newData
                }
                else {
                    return user
                }
            })
            if (newData.isBookMarked) {
                newBookMarkedUsers.push(newData)
            }
            else {
                newBookMarkedUsers = newBookMarkedUsers.filter((user) => user.login != item.login)
            }
            dispatch({ type: SET_BOOK_MARK_USER, users: newUsers, bookMarkedUsers: newBookMarkedUsers })
            if (searchedUsers.length > 0) {
                let searchedUsersData = [...searchedUsers];
                searchedUsersData = searchedUsers.map((user) => {
                    if (user.login == item.login) {
                        return newData
                    }
                    else {
                        return user
                    }
                })
                dispatch({ type: UPDATE_USER_SEARCH_DATA, searchedUsers: searchedUsersData })
            }
        }
        catch (e) {
            console.log('exception is generated', e)
        }
    }
}

export const removeBookMark = (item) => {
    return async (dispatch, getState) => {
        try {
            const { users, bookMarkedUsers } = getState().users
            const { searchedBookmarkedUsers } = getState().search
            let newSearchedBookmarkedUsers = [...searchedBookmarkedUsers]
            let newBookMarkedUsers = [...bookMarkedUsers];
            const newData = { ...item, isBookMarked: !item.isBookMarked }
            let newUsers = users.map((user) => {
                if (user.login == item.login) {
                    return newData
                }
                else {
                    return user
                }
            })
            if (newData.isBookMarked) {
                newBookMarkedUsers.push(newData)
            }
            else {
                newBookMarkedUsers = newBookMarkedUsers.filter((user) => user.login != item.login)
            }
            dispatch({ type: SET_BOOK_MARK_USER, users: newUsers, bookMarkedUsers: newBookMarkedUsers })
            if (searchedBookmarkedUsers.length > 0) {
                if (newData.isBookMarked) {
                    newSearchedBookmarkedUsers.push(newData)
                }
                else {
                    newSearchedBookmarkedUsers = newSearchedBookmarkedUsers.filter((user) => user.login != item.login)
                }
                dispatch({ type: UPDATE_SEARCHED_DATA, searchedBookmarkedUsers: newSearchedBookmarkedUsers })
            }
            if (newSearchedBookmarkedUsers.length > 0) {

            }
        }
        catch (e) {
            console.log('exception is generated', e)
        }
    }
}