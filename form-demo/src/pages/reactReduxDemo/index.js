/**
 * create by wangchunyan1 on 2022/1/4
 */
import {Component} from "react";

export default class ReactReduxDemo extends Component{

    add(){

    }

    render() {
        return (<div>
            <button onClick={this.add.bind(this)}>add</button>
            <button onClick={this.addAsync.bind(this)}>addAsync</button>
        </div>)
    }
}
