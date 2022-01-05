/**
 * create by wangchunyan1 on 2022/1/4
 */
import {combineReducers, createStore, applyMiddleware} from "redux";
import loginReducer from "./loginReducer";
import thunk from 'redux-thunk';
import createSageMiddleware from 'redux-saga'
import loginSaga from "../action/loginSaga";

const sageMiddleware = createSageMiddleware();

const store = createStore(combineReducers({user: loginReducer}), applyMiddleware(thunk, sageMiddleware))

// redux-saga帮助我们执行generator函数
sageMiddleware.run(loginSaga)
export default store;
