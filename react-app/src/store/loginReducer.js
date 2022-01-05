/**
 * create by wangchunyan1 on 2022/1/4
 */
const userInit = {
    isLogin: false,
    userInfo: {id: null, name: '', score: 0},
    loading: false,
    err: {msg: ''}
}
export default function loginReducer(state, {type, payload}){
    switch (type) {
        case REQUEST:
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
