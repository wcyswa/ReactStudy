/**
 * create by wangchunyan1 on 2021/12/16
 */
import useForm from "./useForm";
import FieldContext from "../context/fieldContext";


const Form = ({form, onFinish, onFinishFailed, children}) =>{
    /*
    * form的值，通过组件props传递，供子组件使用，但是有时候却不是严格的父子级关系，所以需要context传递
    * */

    /*
    * context三步走
    * */


    const [formInstance] = useForm(form);
    return (
        <form onSubmit={(e)=>{
            e.preventDefault(); // 原生的form 表单在点击提交的时候会有个跳转
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
