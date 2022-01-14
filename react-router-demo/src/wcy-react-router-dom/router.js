/**
 * create by wangchunyan1 on 2022/1/11
 * 处理跨层级数据传递
 * 404的功能，默认添加一个路由配置
 */
import RouterContext from "./routerContext";
import {Component} from "react";
class Router extends Component{

    static computeRootMatch(pathname) {
        return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
    }

    constructor(props) {
        super(props);
        this.state = {
            location: props.history.location
        }


    }

    componentDidMount() {
        // history本身就有监听函数
        this.props.history.listen(({location})=>{
            this.setState({location})
        })
    }


    render() {
        return <RouterContext.Provider value={{history:this.props.history, location: this.state.location, match: Router.computeRootMatch(this.state.location.pathname)}}>{this.props.children}</RouterContext.Provider>
    }
}

export default Router;

