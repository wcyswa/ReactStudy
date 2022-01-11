/**
 * create by wangchunyan1 on 2022/1/11
 */
import {Component} from "react";
import {createBrowserHistory} from 'history'
import Router from "./router";
export default class BrowserRouter extends Component{

    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
    }

    render() {
        return <Router history={this.history} children={this.props.children}/>
    }
}
