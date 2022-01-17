/**
 * create by wangchunyan1 on 2022/1/17
 */

/*
* 目的：将虚拟dom转化为fiber node
* 条件： 当前虚拟dom节点及父fiber节点
* */
import {Placement} from "./utils";

export default function createFiber(vdom, returnFiber){

    let fiber = {
        // 节点类型： 1.原生标签string 2.函数组件 函数 3.类组件 class
        type: vdom.type,
        // 确定当前层级下的唯一性
        key: vdom.key,
        // 用来表示列表中元素的位置是否发生变化
        index: 0,
        // 节点属性 classname, onClick...
        props: vdom.props,
        // 第一个子节点
        child: null,
        // 下一个兄弟节点
        sibling: null,
        // 父节点
        return: returnFiber,
        // 原生标签：dom节点；类组件：组件实例；函数：null
        stateNode: null,
        // 插入、更新、删除
        flags: Placement
    }

    return fiber;
}
