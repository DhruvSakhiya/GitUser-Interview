import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
    users: userReducer,
    search: searchReducer
})

export default rootReducer