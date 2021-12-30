/**
 * create by wangchunyan1 on 2021/12/22
 * 作为中间件是接收一组函数
 */
export default function applyMiddleware(...middlewares){

    return (createStore) => (reducer) =>{

        const store = createStore(reducer);
        console.log(store, '中间件')
        let dispatch = store.dispatch; // 获取原来的dispatch，去执行中间件函数，增强函数特性

        // todo 加强dispatch
        /*
        * 加强store.dispatch就是执行一系列的中间件
        * 把中间件写成wrapper function
        * 给中间件函数传参 getState, dispatch
        * */
        const midApi = {
            getState: store.getState,
            dispatch: (action)=>dispatch(action)
        }

        // map会返回一组函数，然后链式执行函数，拿到最终增强的dispatch
        const chains = middlewares.map(middleware=>middleware(midApi))
        dispatch = compose(...chains)(store.dispatch); // 执行聚合函数，拿到增强版本的dispatch

        return {
            ...store,
            dispatch,
        }

    }

}

/*
* 聚合函数：但是不执行
* */
function compose(...fns){
    if(fns.length === 0){
        return (args) => args
    }

    if(fns.length === 1){
        return fns[0]
    }

    return fns.reduce((acc, item)=>(...args)=>{
        return acc(item(...args))
    })
}
