/**
 * create by wangchunyan1 on 2022/1/4
 */
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./privateRoute";
import _404Page from "../pages/_404Page";
import UserPage from "../pages/UserPage";
export const routes = [
    {
        path:'/',
        exact: true,
        component: HomePage
    },
    {
        path:'/user',
        component: UserPage,
        auth: PrivateRoute,
    },
    {
        path:'/login',
        component: LoginPage
    },
    {
        component: _404Page
    }
]

export default function Routes(){
    return (
        <Router>
            <Link to={'/'}>首页   </Link>
            <Link to={'/user'}>用户中心   </Link>
            <Link to={'/login'}>登录   </Link>
            {/*<Switch>
                {
                    routes.map((route,index)=>{
                        return <Route {...route} key={index}/>
                    })
                }
            </Switch>*/}

            <Switch>
                <Route exact={true} path={'/'} component={HomePage}/>
                {/*将PrivateRoute代替Route做逻辑判断*/}
                {/*<Route path={'/user'} component={UserPage}/>*/}
                <PrivateRoute path={'/user'} component={UserPage}/>
                <Route path={'/login'} component={LoginPage}/>
                <Route component={_404Page}/>
            </Switch>
        </Router>
    )
}
