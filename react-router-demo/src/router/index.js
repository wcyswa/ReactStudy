/**
 * create by wangchunyan1 on 2022/1/7
 */
// import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {BrowserRouter as Router, Link, Route} from '../wcy-react-router-dom/index'
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import _404Page from "../pages/_404Page";
export default function Routes(){

    return(
        <div>
            <Router>
                <Link to={'/'}>首页</Link>
                <Link to={'/center'}>中心</Link>
                {/*<Switch>*/}
                    <Route path={'/'} exact component={HomePage}/>
                    <Route path={'/center'} component={UserPage}/>
                    {/*<Route component={_404Page}/>*/}
                {/*</Switch>*/}
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
