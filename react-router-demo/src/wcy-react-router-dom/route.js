/**
 * create by wangchunyan1 on 2022/1/11
 */
import React, {Component} from "react";
import RouterContext from "./routerContext";

class Route extends Component{
    render(){

        return(
            <RouterContext.Consumer>
                {
                    (context) =>{
                        // Route的渲染方式为children、component、render等
                        const {path, children, component, render} = this.props;
                        const {location} = context;
                        const match = location.pathname === path;
                        const props = {
                            match,
                            ...context
                        }
                        // return match ? React.createElement(component) : null

                    /*
                    * 1.match children component render
                    * 2.no match  children:func 否则渲染为null
                    * */
                        return match
                            ? children
                                ? typeof children === 'function'
                                    ? children(props)
                                    :
                                    children
                                : component
                                    ?
                                    React.createElement(component, ... props)
                                    :
                                 render
                                 ?  render(props)
                                 :
                                     null
                            :
                            typeof children === 'function' ? children(props) : null
                    }
                }
            </RouterContext.Consumer>
        )
    }

}
export default Route;
