/**
 * create by wangchunyan1 on 2022/1/4
 */
import {REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../action/const";
const userInit = {
    isLogin: false,
    userInfo: {id: null, name: '', score: 0},
    loading: false,
    err: {msg: ''}
}
export default function loginReducer(state=userInit, {type, payload}){
    console.log(type, payload, 'reducer')
    switch (type) {
        case REQUEST: // 请求中
            return {...state, loading: true};
        case LOGIN_SUCCESS:
            return {...state, isLogin: true, loading: false, userInfo: {...payload}};
        case LOGIN_FAILURE:
            return {...state, ...userInit, ...payload};
        case LOGOUT_SUCCESS:
            return {...state, isLogin: false, loading: false};
        default:
            return state;
    }
}
