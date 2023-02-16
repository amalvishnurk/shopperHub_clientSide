import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productlistReducer } from "./reducers/productListReducer";
import { CartlistReducer } from "./reducers/productListReducer";

const reducers = combineReducers({ prodListReducer: productlistReducer, cartReducer: CartlistReducer })

const middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...middleware))

export default store