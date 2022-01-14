/**
 * create by wangchunyan1 on 2022/1/13
 * switch 遍历其子组件，匹配到路由以后渲染
 */
import React, {Component} from 'react';
import RouterContext from "./routerContext";
import matchPath from "./matchPath";

class Switch extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {
                    (context)=>{
                        const {location} = context;
                        const {children} = this.props;

                        let match; // 是否找到匹配元素
                        let element; // 匹配到的元素
                        // 遍历子组件
                        React.Children.forEach(children, (child)=>{
                            // 当前还没有匹配到， child是一个有效的element元素
                            if(match == null && React.isValidElement(child)){
                                element = child;
                                match = child.props.path ? matchPath(location.pathname, child.props)
                                    : context.match
                            }
                        })

                        return match ? React.cloneElement(element, {computedMatch: match}) : null
                    }
                }
            </RouterContext.Consumer>
        );
    }
}

export default Switch;
