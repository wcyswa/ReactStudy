/**
 * create by wangchunyan1 on 2022/1/14
 * Redirect 重定向的也是个组件
 */

import {Component} from "react";
import RouterContext from "./routerContext";

class Redirect extends Component{


    render() {
        const {to} = this.props;
        return <RouterContext.Consumer>
            {
                (context)=>{
                    const {history} = context;
                    return <LifeCycle onMount={()=>{history.push(to)}}/>
                }
            }
        </RouterContext.Consumer>
    }
}

export default Redirect;

class LifeCycle extends Component{

    componentDidMount() {
        this.props.onMount();
    }

    render() {
        return null;
    }
}
