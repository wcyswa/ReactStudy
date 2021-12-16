/**
 * create by wangchunyan1 on 2021/12/16
 */
import React from 'react';
import {Input} from "antd";

export default class CustomInput extends React.Component{

    constructor(props) {
        super(props);
        //声明自己的state
        this.state={}
    }

    render() {
        const {value='', ...otherProps} = this.props;
        console.log(value, otherProps, 'input属性')
        return <div style={{padding:10}}>
            <Input value={value}  {...otherProps}/>
        </div>
    }
}
