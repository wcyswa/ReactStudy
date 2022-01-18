/**
 * create by wangchunyan1 on 2022/1/17
 * 更新fiber节点
 */


import {isFn, isStr} from "./utils";
import {updateFragmentComponent, updateFunctionComponent, updateHostComponent} from "./ReactFiberReconciler";

/*
* 目的：更新fiber节点
* 当前的fiber是包含根节点的fiber
* 需要做两件事： 1.更新fiber 2.提交更新后的fiber到root节点
* todo：什么时候更新呢？ 怎么更新下一个要更新的fiber呢？
* */
let wipRoot = null; // work in progress root 正在工作中的节点
let nextUnitOfWork = null; // 下一个要更新的任务
export function scheduleUpdateOnFiber(fiber){
    wipRoot = fiber;
    wipRoot.sibling = null;
    nextUnitOfWork = wipRoot;
}

/*
* 浏览器空闲的时候更新:此方法浏览器空闲的时候自动调用
* 调用回调函数的时候，会传递IdleDeadline参数，这个对象会有一些方法，比如timeRemaining()获取当前剩余时间
* */
requestIdleCallback(workLoop);

function workLoop(IdleDeadline){
    /*
    * 1.当前有任务执行，并且还有剩余时间，处理下一个任务
    * */
    while(nextUnitOfWork && IdleDeadline.timeRemaining() > 0){
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }

    /*
    * 2.当前任务处理完成，提交fiber结构的vdom到root
    * */
    if(!nextUnitOfWork && wipRoot){
        commitRoot();
    }
}


/*
* 提交fiber结构的vdom到root节点上
* #root节点已经是真实dom了，所以从子节点开始提交
* */
function commitRoot(){
    commitRootWork(wipRoot.child);
}

/*
* 提交节点
* 1.提交自己
* 2.提交兄弟
* 3.提交子节点
* */
function commitRootWork(wip){
    if(!wip){
        return null;
    }

    // 提交自己
    const parentNode = getParentNode(wip);
    const {stateNode} = wip;
    if(stateNode){
        parentNode.appendChild(wip.stateNode);
    }

    // 提交兄弟
    commitRootWork(wip.sibling)

    // 提交子节点
    commitRootWork(wip.child)
}

/*
* 当前节点有父节点，并且父节点是有效标签，则返回当前父节点，否则，继续向上查找
* */
function getParentNode(wip){
    let parent = wip.return;

    while (parent){
        if(parent.stateNode){
            return parent.stateNode;
        }
        parent = parent.return;
    }
}


/*
* 更新下一个fiber
* 目的：1.更新自己为真实dom  2.提交下一个要更新的vdom节点
* */
function performUnitOfWork(wip){
    /*
    * 1.首先更新自己当前的fiber节点
    * */
    const {type} = wip;
    if(isStr(type)){
        updateHostComponent(wip);
    }else if(isFn(type)) {
        console.log(type, 'fn')
        updateFunctionComponent(wip);
    }else{
        updateFragmentComponent(wip);
    }

    /*
    * 2.深度优先遍历：依据王朝的故事进行更新
    * 使用nextUnitOfWork指针，遍历整个树
    * */
    if(wip.child){
        return wip.child
    }

    while (wip){
        if(wip.sibling){
            return wip.sibling
        }
        wip = wip.return;
    }
    return null;// 王朝结束
}

