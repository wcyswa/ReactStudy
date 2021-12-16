/**
 * create by wangchunyan1 on 2021/12/16
 */

class FormStore{
    constructor() {
        this.store = {}
    }

    // get
    getFieldsValue(){
        return {...this.store}
    }

    getFieldValue(name){
        return this.store[name]
    }
    // set
    setFieldValue(newStore){
        this.store = {
            ...this.store,
            ...newStore
        }
    }

}

export default function useForm(){
    const formStore = new FormStore();
    return [];
}
