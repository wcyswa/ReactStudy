/**
 * create by wangchunyan1 on 2021/12/16
 */
import _Form from './form';
import Field from './field';
import useForm from "./useForm";

const Form = _Form;
Form.Field = File;
Form.useForm = useForm;
export {Field,useForm}
export default Form;
