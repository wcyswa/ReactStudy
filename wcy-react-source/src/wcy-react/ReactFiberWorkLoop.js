/**
 * create by wangchunyan1 on 2022/1/17
 * 更新fiber节点
 */

/*
* 目的：更新fiber节点
* 当前的fiber是包含根节点的fiber
* 需要做两件事： 1.更新fiber 2.提交更新后的fiber到root节点
* todo：怎么更新下一个要更新的fiber呢？ 什么时候更新呢？
* */
let wipRoot = null; // work in progress root 正在工作中的节点
let nextUnitOfWork = null; // 下一个要更新的任务
function scheduleUpdateOnFiber(fiber){
    wipRoot = fiber;
    wipRoot.sibling = null;
    nextUnitOfWork = wipRoot;
}

/*
*
* */
function performUnitOfWork(){

}

export default scheduleUpdateOnFiber;
