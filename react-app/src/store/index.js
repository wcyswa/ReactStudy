/**
 * create by wangchunyan1 on 2022/1/4
 */
import {applyMiddleware, combineReducers, createStore} from "redux";

const store = createStore(combineReducers({user: loginReducer}))
