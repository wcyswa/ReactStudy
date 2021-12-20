/**
 * create by wangchunyan1 on 2021/12/20
 * 1.创建context对象
 * 2.通过Provider传递值
 * 3.消费跨层级传递的数据
 *  3.1 contextType 适用于类组件，并且只能订阅单一数据源
 *  3.2 useContext 适用于函数组件
 *  3.3 Consumer 可以用于函数组件跟类组件
 */
import React from "react";
const FieldContext = React.createContext();

export default FieldContext;
