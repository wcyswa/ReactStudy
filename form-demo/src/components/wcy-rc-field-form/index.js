/**
 * create by wangchunyan1 on 2021/12/16
 */
import React from "react";
import _Form from './form';
import Field from './field';
import useForm from "./useForm";

// 函数组件直接赋值
// const Form = _Form;

// 类组件做forwardRef转发
const Form = React.forwardRef(_Form);
Form.Field = File;
Form.useForm = useForm;
export {Field,useForm}
export default Form;
