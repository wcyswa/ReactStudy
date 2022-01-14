/**
 * create by wangchunyan1 on 2022/1/11
 */
import React, {Component} from "react";
import RouterContext from "./routerContext";

export default class Route extends Component{
    render(){

        return(
            <RouterContext.Consumer>
                {
                    (context) =>{
                        // Route的渲染方式为children、component、render等
                        const {path, children, component, render, computedMatch} = this.props;
                        const {location} = context;
                        const match = computedMatch ? computedMatch : path ? location.pathname === path : context.match;
                        const props = {
                            ...context,
                            match
                        }
                        // return match ? React.createElement(component) : null

                    /*
                    * 1.match children component render
                    * 2.no match  children:func 否则渲染为null
                    * 问题： 传参的时候React.createElement(component, props) props为对象
                    *
                    * 改造结构：v1:return match表达式   v2：使用消费者是因为route的子组件需要获取最近的consumer，来获取最新的关于路由的match、location、history
                    * */
                        return <RouterContext.Provider value={props}>
                            {
                                match
                                    ? children
                                    ? typeof children === "function"
                                        ? children(props)
                                        : children
                                    : component
                                        ? React.createElement(component, props)
                                        : render
                                            ? render(props)
                                            : null
                                    : typeof children === "function"
                                    ? children(props)
                                    : null
                            }
                        </RouterContext.Provider>
                    }
                }
            </RouterContext.Consumer>
        )
    }

}
