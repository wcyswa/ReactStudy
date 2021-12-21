/**
 * create by wangchunyan1 on 2021/12/16
 * antd4的表单是基于rc-field-form实现的
 */

import React, {useEffect, Component} from 'react'

// 使用antd组件库系列
// import FormItem from "./formItem";
// import Form,{Field} from 'rc-field-form';
// import {Input} from 'antd';

// 自定义系列
import Input from '../../components/customInput/index'
import Form,{Field} from '../../components/wcy-rc-field-form';
import {Button} from "antd";

// 函数组件
/*const WcyAntdForm = () =>{
    const [form] = Form.useForm();

    useEffect(()=>{
        form.setFieldValue({'username':''})
        form.setFieldValue({'password':''})
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
}*/

// 类组件
class WcyAntdForm extends Component{
    formRef = React.createRef();

    componentDidMount() {
        // 通过子组件反弹了实例给父组件，所以才获得了实例；
        this.formRef.current.setFieldValue({'username':'test'})
    }

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render(){
        return (
            <div>
                <Form
                    ref={this.formRef}
                    // form={form}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}>
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
}

export default WcyAntdForm;
