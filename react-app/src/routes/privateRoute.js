/**
 * create by wangchunyan1 on 2022/1/4
 *
 */
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";

function PrivateRoute ({isLogin, component: Component, ...rest}){
    console.log(rest, '锤死你')
    return <Route {...rest} render={(props)=>
        isLogin ?
            <Component {...props}/> :
            <Redirect to={{pathname:'/login', state:{redirect: props.location.pathname}}}/>
    }/>
}

export default connect(({user})=>({isLogin: user.isLogin}))(PrivateRoute);
