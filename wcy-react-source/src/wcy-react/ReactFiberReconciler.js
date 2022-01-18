/**
 * create by wangchunyan1 on 2022/1/18
 */
/*
* 目的：创建真实的dom节点
* */
import {isStringOrNumber, updateNode} from "./utils";
import createFiber from "./createFiber";

export function updateHostComponent(wip){
    // 1.初次渲染、创建节点
    if(!wip.stateNode){
        wip.stateNode = document.createElement(wip.type)
        // 将props更新到node节点上
        updateNode(wip.stateNode, wip.props)
    }

    // 2.协调子节点： 将子vdom 转化成真实dom
    reconcileChildren(wip, wip.props.children);
    console.log(wip, 'fiber node syn-log')
}

export function updateFunctionComponent(wip){
    const children = wip.type(wip.props);
    reconcileChildren(wip, children)
}

export function updateFragmentComponent(wip){

}

function reconcileChildren(returnFiber, children){
    if(isStringOrNumber(children)){
        return;
    }
    const newChildren = Array.isArray(children) ? children : [children];

    let previousNewFiber = null;
    for (let i = 0;i< newChildren.length;i++){
        const child = newChildren[i]; // child当前还是vdom节点
        const newFiber = createFiber(child, returnFiber);

        /*
        * 当前fiber节点存在的child 和 sibling关系
        * */
        // 第一个子节点，去做父节点的child
        if(previousNewFiber === null){
            returnFiber.child = newFiber;
        }else{
            // 上一个节点的sibling是当前节点
            previousNewFiber.sibling = newFiber;
        }
        previousNewFiber = newFiber;
    }
}
