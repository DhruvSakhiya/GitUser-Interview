import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "../reducers";
import {persistReducer} from "redux-persist";
import { persistConfig } from "../../config";


const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);

export default store