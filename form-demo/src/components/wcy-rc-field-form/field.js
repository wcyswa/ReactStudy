/**
 * create by wangchunyan1 on 2021/12/16
 * 此处使用类组件主要是因为需要使用类组件的forceUpdate特性
 */
import  React from 'react';

export default class Field extends React.Component{


    getControlled = () =>{
        return {
            value:'wcy',
            onChange: (e)=>{
                const newVal = e.target.value;
                console.log(newVal, 'newVal')
            }
        }
    }

    render(){
        const {children} = this.props;
        // 将组件变为受控组件
        const returnChildNode = React.cloneElement(children, this.getControlled())
        console.log(returnChildNode, '节点')
        return returnChildNode;
    }

}
