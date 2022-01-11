/**
 * create by wangchunyan1 on 2022/1/11
 * 处理跨层级数据传递
 */
import RouterContext from "./routerContext";
import {Component} from "react";
class Router extends Component{

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
        return <RouterContext.Provider value={{history:this.props.history, location: this.state.location}}>{this.props.children}</RouterContext.Provider>
    }
}

export default Router;

