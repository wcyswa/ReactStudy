/**
 * create by wangchunyan1 on 2021/12/22
 */

export default function createStore(reducer){

    let currentState;
    let currentListeners = [];
    const dispatch = (action) =>{
        currentState = reducer(currentState, action);
        // 执行订阅函数
        currentListeners.forEach(listener =>  listener())
    }

    const getState = () =>{
        return currentState;
    }

    const subscribe = (listener) =>{

        // 订阅
        currentListeners.push(listener)

        // 取消订阅
        return ()=>{
            const index = currentListeners.indexOf(listener);
            currentListeners.splice(index, 1);
        }
    }

    // 解决没有初始化值的问题：调用createStore的时候手动执行dispatch
    // 实现的原因是，执行dispatch方法时，会执行reducer, reducer中定义了state, 因此当type取值不在我们reducer预设范围内，会返回state初始值；因此源码中这里的type值是字符串
    dispatch({type: 'A'})

    return {
        dispatch,
        getState,
        subscribe
    }
}
