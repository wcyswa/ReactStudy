/**
 * create by wangchunyan1 on 2021/12/16
 */
import { useRef } from 'react'
class FormStore{
    constructor() {
        // 数据仓库，用来set get数据
        this.store = {}
        // 用来存储实例
        this.fieldEntries = [];
        this.callbacks = {}
    }

    setCallbacks = (callbacks) =>{
        this.callbacks = {
            ...this.callbacks,
            ...callbacks
        }
    }

    // 订阅与取消订阅 监听与取消监听都是成对出现的
    registerFieldEntries = (field) =>{
        this.fieldEntries.push(field);
        return ()=>{
            this.fieldEntries  = this.fieldEntries.filter(_fn=>{
                return _fn !== field
            })
        }
    }

    // get
    getFieldsValue = () =>{
        return {...this.store}
    }

    getFieldValue = (name) =>{
        // console.log(this.store, '获取')
        return this.store[name]
    }
    // set
    setFieldValue = (newStore) => {
        this.store = {
            ...this.store,
            ...newStore
        }
        // console.log(this.store, '设置')
        // 订阅组件更新
        // 数据更新的时候去更新组件

        // version1 : 存在问题，没有订阅指定组件的更新
        // this.fieldEntries.forEach(entry=>entry.onStoreChange())

        // version2 订阅指定组件的更新： 存在问题组件卸载的时候需要取消订阅
        this.fieldEntries.forEach(entry=>{
            Object.keys(newStore).forEach(key=>{
                if(key === entry.props.name){
                    entry.onStoreChange();
                }
            })
        })

        // version3 解决v2中组件卸载需要取消订阅
        // 通过暴露出订阅与取消订阅来保证 registerFieldEntries

    }

    validate = () =>{
        let errs = [];
        const list = this.getFieldsValue();
        Object.keys(list).forEach(key=>{
            if(list[key].length <= 0){
                errs.push(`请填写${key}`)
            }
        })
        return errs;
    }

    onSubmit =()=>{
        const errs = this.validate();
        if(errs.length<=0){ // 校验通过
            // onFinish
            this.callbacks.onFinish(this.getFieldsValue());
        }else{
            // onFinishFailed
            this.callbacks.onFinishFailed(errs, this.getFieldsValue());
        }
    }

    getForm = () =>{
        return {
            setCallbacks: this.setCallbacks,
            registerFieldEntries: this.registerFieldEntries,
            getFieldsValue: this.getFieldsValue,
            getFieldValue: this.getFieldValue,
            setFieldValue: this.setFieldValue,
            onSubmit: this.onSubmit,
        }
    }
}

export default function useForm(form){
    // formStore 用来存储，因此需要将store本身先存储起来，否则每次都是创建,即将store存储到dom中
    // 目的： 保证组件在卸载前的每个生命周期都访问的是同一个store
    const storeRef = useRef();
    /*
    如果dom没有值，则创建store
    * */
    if(!storeRef.current){
        /*
        *在Form组件调用的时候，可能忘了严格的去初始化formStore，因此可以用传参的方式解决formStore被重复定义的问题
        * */
        if(form){
            storeRef.current = form;
        }else{
            const formStore = new FormStore();
            storeRef.current = formStore.getForm();
        }
    }

    return [storeRef.current]; // 已经将store存在了ref上
}
