/**
 * create by wangchunyan1 on 2022/1/13
 */
import {useContext} from "react";
import RouterContext from "./routerContext";

function useHistory(){
    return useContext(RouterContext).history;
}

function useRouteMatch(){
    return useContext(RouterContext).match;
}

function useLocation(){
    return useContext(RouterContext).location;
}
function useParams(){
    // 如果存在match属性，则返回params
    const match = useContext(RouterContext).match;
    return match ? match.params : {}
}

export {useHistory, useParams, useRouteMatch, useLocation}
