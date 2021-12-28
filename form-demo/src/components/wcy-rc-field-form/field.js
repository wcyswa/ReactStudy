/**
 * create by wangchunyan1 on 2021/12/16
 * 此处使用类组件主要是因为需要使用类组件的forceUpdate特性
 */
import  React from 'react';
import FieldContext from "../context/fieldContext";

export default class Field extends React.Component{

    static contextType = FieldContext;
    unRegisterFieldEntries = null;

    componentDidMount() {
        const {registerFieldEntries} = this.context;
        this.unRegisterFieldEntries = registerFieldEntries(this)
    }

    componentWillUnmount() {
        this.unRegisterFieldEntries();
    }

    // 该方法在userForm中更新完了以后被本实例的this，因此在组件挂载完以后，需要在FieldContext中有个结构去保存对象的实例
    onStoreChange = () =>{
        this.forceUpdate();
    }

    getControlled = () =>{
        const {getFieldValue, setFieldValue} = this.context;
        const {name} = this.props;
        return {
            value: getFieldValue(name),
            onChange: (e)=>{
                const newVal = e.target.value;
                setFieldValue({[name]: newVal});
            }
        }
    }

    render(){
        const {children} = this.props;
        // 将组件变为受控组件
        const returnChildNode = React.cloneElement(children, this.getControlled())
        return returnChildNode;
    }

}
