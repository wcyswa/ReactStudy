/**
 * create by wangchunyan1 on 2021/12/22
 * 中间件是作为增强dispatch存在的
 */
export default function createStore(reducer, enhancer){
    console.log(reducer, enhancer, '发了')

    if(enhancer){
        /*
        * enhancer作为中间件，主要是对dispatch进行增强， 函数本身也会返回一个对象{dispatch, getState, subscribe}
        * 内部主要是进行dispatch的增强
        *
        * middleware传参的时候是逗号分隔，调用的时候遵循函数式编程，需要链式调用
        * */
        return enhancer(createStore)(reducer);
    }

    let currentState;
    let currentListeners = [];
    const dispatch = (action) =>{
        console.log(action, 'dispatch函数本身')
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
