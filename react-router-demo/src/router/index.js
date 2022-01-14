/**
 * create by wangchunyan1 on 2022/1/7
 */
// import {BrowserRouter as Router, Link, Route, Switch, useHistory, useRouteMatch, useLocation, useParams} from 'react-router-dom'
import {BrowserRouter as Router, Link, Route, Switch,  useHistory, useRouteMatch, useLocation, useParams, withRouter} from '../wcy-react-router-dom/index'

import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import _404Page from "../pages/_404Page";
import {Component} from "react";
export default function Routes(){

    const HocProduct = withRouter(<Product/>)
    console.log(HocProduct, '组件')
    return(
        <div>
            <Router>
                <Link to={'/'}>首页</Link>
                <Link to={'/center'}>中心</Link>
                <Link to={'/product/123'}>商品</Link>
                <Link to={'/center1'}>找不到</Link>
                <Switch>
                {/*    <Route path={'/'} children={children} exact component={HomePage}/>*/}
                    <Route path={'/'} exact component={HomePage}/>
                    <Route path={'/center'} component={UserPage}/>
                    <Route path={'/product/:id'} component={Product}/>
                    {/*render 方式渲染时，相当于是跨组件传递了，组件就拿不到match、history、location等数据*/}
                    {/*<Route path={'/product/:id'} component={withRouter(<Product/>)}/>*/}
                    <Route component={_404Page}/>
                </Switch>
            </Router>
        </div>
    )
}

function render(){
    return <h2>render方式</h2>
}

function children(){
    return <h2>children方式</h2>
}

/*
* 函数组件使用hooks
* */
function Product(){
    const {id} = useParams();

    return <h3>{`商品：${id}`}</h3>
}


/*
* 类组件使用hoc处理router参数
* */
/*class Product extends Component{

    /!*组件的实现方式
    *
    * 如果需要跨层级拿到router参数，对于类组件可以使用withRouter
    *
    * *!/
    // const {match, history, location} = props;
    // const {id} = match.params;

    // hooks实现


    render(){
        console.log(this.props)
        const {id} = this.props
        return <h3>{`商品：${id}`}</h3>
    }

}*/
