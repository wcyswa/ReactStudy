/**
 * create by wangchunyan1 on 2022/1/17
 */

/*
* 目的： 1.生成vdom为fiber node  2.将虚拟dom挂载到container节点上
* */
import scheduleUpdateOnFiber from "./ReactFiberWorkLoop";

function render(vdom, container){
    // 1.以container为根节点，生成fiber node
    const fiberNode = {
        type: container.type.toLocaleLowerCase(),
        stateNode: container,
        props: vdom.props
    }

    // 2.将虚拟dom节点挂载到root 根节点上
    scheduleUpdateOnFiber(fiberNode);
}

export default {render};
