/**
 * create by wangchunyan1 on 2022/1/19
 */

export function Component(props){
    this.props = props;
}

/*
* 函数组件跟类组件本质上都是函数组件，可以通过对Component原型上设置标识来区分是不是类组件
* */
Component.prototype.isClassComponent = true;
