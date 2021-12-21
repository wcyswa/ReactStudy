
1.context注意事项：
当provider传递的是对象的时候，应该放到state中，因为下面的传递方式，是每次组件发生变化的时候，都会创建一个新的对象，
diff过程中，比较两个对象的值，肯定是不相同的，因为是两个完全不一样的对象；原则就是传递对象的地址，防止意外的渲染
<Provider value={{something:'something'}}>

2.react-redux\react-router都是用到了context

3.context使用
3.1 Class.contextType 用在类组件中，只能订阅单一context来源，否则会覆盖
3.2 Consumer 可以用在函数组件和类组件
3.3 useContext 用在函数组件或者自定义hooks中

4.antd3 vs antd4
antd3 将form表单项的状态存储到form, 通过hoc去添加状态；缺点：当表单的某一项更新的时候，整个组件也是在更新的，
如果整个form表单比较大，就会比较费劲
antd4 将状态存在store(仓库)中，当get/set的时候，通知组件去更新(setState\forceUpdate)。具体通知到Form.item

这两者更新较大的地方就是useForm

5.antd4是基于re-field-form来进一步做的封装

6.封装form表单的过程
    1.需要form组件、field组件、useForm函数组件、input组件[搭架子] 
    2.构建状态仓库 FormStore
    3.将非受控组件处理为受控组件[React.cloneElement的时候，没有调用方法，导致没给children绑定属性，因此onChange没有效果]
    4.实例化store，并将其保存起来[1.通过ref存储 2.form有可能不会去实例化，但是field是需要用到的]
