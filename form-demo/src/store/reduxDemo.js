/**
 * create by wangchunyan1 on 2021/12/21
 */
// redux
// import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// wcyRedux
import {createStore, applyMiddleware} from '../wcy-redux/index';

function countReducer(state = 0, action){
    switch (action.type){
        case 'ADD':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(countReducer, applyMiddleware(thunk, logger))
export default store;
