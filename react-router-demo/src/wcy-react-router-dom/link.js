/**
 * create by wangchunyan1 on 2022/1/11
 */
import {useContext} from "react";
import RouterContext from './routerContext'
function Link({to, children}){

    /*
    * 阻止a标签默认事件，通过history实现，但是需要适配不同的history,就需要在父组件处理
    * */
    const context = useContext(RouterContext);
    const handleRouter = (e) =>{
        e.preventDefault();
        context.history.push(to)
    }

    return <a href={to} onClick={handleRouter}>{children}</a>
}
export default Link;
