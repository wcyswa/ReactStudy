import {LOGIN_SUCCESS, LOGIN_SAGA, LOGIN_FAILURE, REQUEST} from "./const";
import LoginService from "../service/login";
import co from "co";

/*
* 1.同步实现，没有考虑到异步请求
* */
// export const login = (userInfo) => ({type: LOGIN_SUCCESS, payload: userInfo} );

/*
* 2.thunk处理异步请求
* 配合：需要在store处，添加中间件thunk
* 缺点： 多个异步函数的时候，需要嵌套执行
* */
/*export const login = (userInfo) => (dispatch)=>{
    dispatch({type: REQUEST})
    LoginService.login(userInfo).then((res)=>{
        console.log(res, '成功结果')
        dispatch({type: LOGIN_SUCCESS, payload: res} )
    },(rej)=>{
        console.log(rej, '失败结果')
        dispatch({type:LOGIN_FAILURE, payload: rej})
    })

};*/

/*
*
* 3.thunk嵌套执行函数
* */
/*export const login = (userInfo) => (dispatch) => {
  dispatch({type: "REQUEST"});
  LoginService.login(userInfo).then(
    (res) => {
      getMoreUserInfo(dispatch, res);
    },
    (err) => {
      dispatch({type: "LOGIN_FAILURE", payload: err});
    }
  );
};

export const getMoreUserInfo = (dispatch, userInfo) => {
  LoginService.getMoreUserInfo(userInfo).then(
    (res) => {
      dispatch({type: "LOGIN_SUCCESS", payload: res});
    },
    (err) => {
      dispatch({type: "LOGIN_FAILURE", payload: err});
    }
  );
};*/

/*
* 4.解决thunk，多个异步函数之间嵌套调用的问题
* 使用async await, 本质是generator的语法糖
* */
/*export function login(userInfo) {
  return async function(dispatch) {
    dispatch({type: "REQUEST"});
    // 请求1： 用户登录
    let res1 = await loginPromise(dispatch, userInfo);
    console.log("rrrr", res1); //sy-log
    // 请求2： 根据用户基本信息获取详细信息
    if (res1) {
      getMoreUserInfo(dispatch, res1);
    }
  };
}

export const loginPromise = (dispatch, userInfo) => {
  return LoginService.login(userInfo).then(
    (res) => {
      // dispatch({type: "LOGIN_SUCCESS", payload: res});
      return res;
    },
    (err) => {
      dispatch({type: "LOGIN_FAILURE", payload: err});
    }
  );
};

export const getMoreUserInfo = (dispatch, userInfo) => {
  LoginService.getMoreUserInfo(userInfo).then(
      (res) => {
        dispatch({type: "LOGIN_SUCCESS", payload: res});
      },
      (err) => {
        dispatch({type: "LOGIN_FAILURE", payload: err});
      }
  );
};*/

/*
* 5.也可以使用原生的generator去实现，只不过总是需要调用next函数才能执行，所以借助co库去自动执行
* */
/*export function login(userInfo) {
  return function(dispatch) {
    return co(function*() {
      dispatch({type: "REQUEST"});
      // 请求1： 用户登录
      let res1 = yield loginPromise(dispatch, userInfo);
      console.log("rrrr", res1); //sy-log
      // 请求2： 根据用户基本信息获取详细信息
      if (res1) {
        getMoreUserInfo(dispatch, res1);
      }
    });
  };
}

export const loginPromise = (dispatch, userInfo) => {
    return LoginService.login(userInfo).then(
        (res) => {
            // dispatch({type: "LOGIN_SUCCESS", payload: res});
            return res;
        },
        (err) => {
            dispatch({type: "LOGIN_FAILURE", payload: err});
        }
    );
};

export const getMoreUserInfo = (dispatch, userInfo) => {
    LoginService.getMoreUserInfo(userInfo).then(
        (res) => {
            dispatch({type: "LOGIN_SUCCESS", payload: res});
        },
        (err) => {
            dispatch({type: "LOGIN_FAILURE", payload: err});
        }
    );
};*/

/*
* redux-saga
* 封装的generator的库
* */
export const login = (userInfo) => ({type: LOGIN_SAGA, payload: userInfo});

