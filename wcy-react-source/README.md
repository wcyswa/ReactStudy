#虚拟dom
1.什么是虚拟dom
虚拟dom是一个js对象，主要描述dom信息和结构（什么dom类型，父元素是谁，兄弟节点以及子元素是什么？）；当状态
变更的时候，会重新渲染这个js对象的结构。
2.为什么要使用虚拟dom
dom操作相对来说比较慢，一个dom节点变更，就可能引起整个页面的重排、重绘，非常消耗性能。相对dom来说，虚拟dom
操作的是对象，可以通过前后比较两个对象的差异，批量的，最小化的完成dom的执行，提升用户体验；

使用虚拟dom的另外一个原因：虚拟dom是个js对象，因此可以跨平台的使用。解决了平台之间的差异性。

3.哪里存在虚拟dom
jsx 就是虚拟dom,等同于使用React.createElement()创建的虚拟dom
react16,babel-loader会预编译jsx为createElement
react17，不会将jsx转化为createElement,自动从react package中引入新的入口函数并调用

#fiber 
fiber是链表结构的js对象，每个节点是一个任务，可以对任务赋予优先级，也可以中断任务执行等
1.为什么需要需要
大型项目而言，组件树很大，递归遍历的成本就很高，会造成主线程被持续占用，而得不到响应。比如一些动画、布局
无法立即得到处理，造成视觉卡顿，影响用户体验
2.fiber对大任务进行分解，解决了上述问题
3.增量渲染（将渲染任务拆分成块，匀到多帧）
4.更新的时候能够暂停、终止、复用渲染任务
5.给不同类型的更新赋予优先级
6.并发方面新的基础能力
7.更流畅

#fiber节点的属性

{
    stateNode: 节点类型,原生标签就是dom节点，类组件就是实例
    key: 标识唯一性
    index: 节点的位置
    flags: 提交或者更新
    type: string('div'等)、function、class Component
    child: 第一个子节点
    sibling: 下一个兄弟节点【兄弟节点通过sibling来表示关联，充当了next指针】
    return: 父节点
    props: 节点属性
    alternate: old Fiber
}

#react element 节点属性(jsx) 原始的虚拟dom节点
{
    type:类型 字符串('div')| Function | class
    key:标识唯一节点
    ref:
    props:{ // 节点上的所有属性
        children: [
            type: 
            key:
            props:
            href:
        ]
        className:
    }
}

#render的目的
将虚拟dom节点，转换为fiber node 链接结构的节点

#深度优先遍历
遵循王朝的故事： 皇帝挂了以后，优先孩子继承、然后皇帝的兄弟、再是皇帝的叔叔、然后再往上推，实在没有，
王朝结束了。
