/**
 * create by wangchunyan1 on 2021/12/16
 */
import {useImperativeHandle} from 'react'
import useForm from "./useForm";
import FieldContext from "../context/fieldContext";


const Form = ({form, onFinish, onFinishFailed, children}, ref) =>{
    /*
    * form的值，通过组件props传递，供子组件使用，但是有时候却不是严格的父子级关系，所以需要context传递
    * */

    /*
    * context三步走
    * */

    // ! 对于使用数据仓库的类组件，初次实例化仓库是发生在这里，因为在父组件中拿不到useForm，此时的form也没有值； 而函数组件是发生在Form的父组件
    const [formInstance] = useForm(form);
    formInstance.setCallbacks({onFinish, onFinishFailed})

    // 将子组件的实例反弹给父组件
    // 使用ref的时候，自定义暴露给父组件的实例值
    useImperativeHandle(ref, ()=>formInstance)
    return (
        <form onSubmit={(e)=>{
            e.preventDefault(); // 原生的form 表单在点击提交的时候会有个跳转
            formInstance.onSubmit()
        }}>
            <FieldContext.Provider value={formInstance}>
                <div>
                    {children}
                </div>
            </FieldContext.Provider>
        </form>

    )
}

export default Form;
