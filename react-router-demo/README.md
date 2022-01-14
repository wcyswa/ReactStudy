1.react-router的基本使用

2.BrowserRouter(需要后端配置)、MemoryRouter(内存)、HashRouter(不需要后端配置)属于路由组件的父类，需要由这些组件包裹，才可以使用Route、Link、Switch组件

3.Route渲染组件的三种方式
1.children:func(在没有switch组件的情况下，不管路由是否匹配children都会渲染;)
2.render:func
3.component:组件(当使用内联函数的时候，应该使用children或者render的方式渲染组件；)

渲染优先级关系：children > component >  render

