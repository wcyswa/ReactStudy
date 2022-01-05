/**
 * create by wangchunyan1 on 2022/1/4
 */
import {combineReducers, createStore} from "redux";
import loginReducer from "./loginReducer";

const store = createStore(combineReducers({user: loginReducer}))
export default store;
