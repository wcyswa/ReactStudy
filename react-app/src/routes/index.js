/**
 * create by wangchunyan1 on 2022/1/4
 */
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import _404Page from "../pages/_404Page";
export const routes = [
    {
        path:'/',
        exact: true,
        component: HomePage
    },
    {
        path:'/user',
        exact: true,
        auth: PrivateRoute,
        component: UserPage
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
            <Switch>
                {
                    routes.map(route=>{
                        return <Route {...route}/>
                    })
                }
            </Switch>
        </Router>
    )
}
