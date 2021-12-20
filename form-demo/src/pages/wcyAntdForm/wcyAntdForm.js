/**
 * create by wangchunyan1 on 2021/12/16
 * antd4的表单是基于rc-field-form实现的
 */

import {useEffect} from 'react'

// 使用antd组件库系列
// import FormItem from "./formItem";
// import Form,{Field} from 'rc-field-form';
// import {Input} from 'antd';

// 自定义系列
import Input from '../../components/customInput/index'
import Form,{Field} from '../../components/wcy-rc-field-form';
import {Button} from "antd";
const WcyAntdForm = () =>{
    const [form] = Form.useForm();

    useEffect(()=>{
        form.setFieldValue({'username':'请填写'})
    })

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Field label="Username"
                          name="username">
                    <Input/>
                </Field>
                <Field label="Password"
                          name="password">
                    <Input/>
                </Field>
                <Field>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Field>
            </Form>
        </div>
    )
}

export default WcyAntdForm;
