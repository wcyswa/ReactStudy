/**
 * create by wangchunyan1 on 2021/12/21
 */
// redux
import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// wcyRedux
// import {createStore, applyMiddleware} from '../wcy-redux/index';

export function countReducer(state = 0, action){
    console.log(state, action, '执行reducer')
    switch (action.type){
        case 'ADD':
            return state + (action.payload || 1);
        case 'MINUS':
            return state - (action.payload || 1);
        default:
            return state;
    }
}

//
const reducers = combineReducers({count: countReducer})
const store = createStore(reducers, applyMiddleware(thunk, logger))
export default store;

/*
* logger作为中间件，会接收 getState, dispatch
* 接收参数去执行，然后再返回函数[这个函数是compose处理的聚合函数]
* */
function logger1({getState, dispatch}){
    return (next) => (action) => { // next表示dispatch
        console.log('~~~~~~~~~~~~~~')
        console.log(action.type+'执行了')
        const prevState = getState();
        console.log(prevState, 'prevState')
        const returnVal = next(action);
        const currentState = getState();
        console.log(currentState, 'currentState')
        console.log('~~~~~~~~~~~~~~')
        return returnVal;
    }
}

/*
* thunk主要是执行异步函数
* 如果是函数，则执行函数
* */
function thunk1({getState, dispatch}){
    return (next) => (action) =>{
        if(typeof action === 'function'){
            return action(dispatch, getState)
        }
        return next(action)
    }
}
