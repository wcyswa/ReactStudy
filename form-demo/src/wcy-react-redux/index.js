/**
 * create by wangchunyan1 on 2022/1/4
 */
import {createContext, useCallback, useContext, useLayoutEffect, useReducer} from "react";
/*
* 1.context跨层级数据传递
* 创建context对象
* */
const Context =  createContext();

/*
* 2.Provider是个组件，接收children和store
* */

export function Provider({children, store}){
    return <Context.Provider value={store}>{children}</Context.Provider>
}

/*
* 3.子组件消费value
* consumer
* contextType
* useContext
* */
export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => (props) => {
    const store = useContext(Context);
    const stateProps = mapStateToProps(store.getState())
    // console.log(stateProps, 'stateProps')
    let dispatchProps = {dispatch: store.dispatch}
    if(typeof mapDispatchToProps === 'object'){
        dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
    }else if(typeof mapDispatchToProps === 'function'){
        dispatchProps = mapDispatchToProps(store.dispatch)
    }

    const forceUpdate = useForceUpdate();
    /*
    * 当state变化的时候，更新组件
    * */
    useLayoutEffect(()=>{
        const unsubscribe = store.subscribe(()=>{
            // forceUpdate
            forceUpdate();
        })
        return ()=>{
            unsubscribe();
        }
    }, [store])
    return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
};

function useForceUpdate(){
    const [,setState] = useReducer(x=>x+1,0)
    const update = useCallback(()=>{
        setState();
    }, [])
    return update;
}

function bindActionCreator(creator, dispatch) {
    return (...arg) => dispatch(creator(...arg));
}

export function bindActionCreators(creators, dispatch) {
    let obj = {};

    // todo
    for (let key in creators) {
        obj[key] = bindActionCreator(creators[key], dispatch);
    }

    return obj;
}

export function useDispatch(){
    const store = useContext(Context);
    return store.dispatch;
}

export function useSelector(selector){
    const store = useContext(Context);
    const selectedState = selector(store.getState());
    const forceUpdate = useForceUpdate();

    useLayoutEffect(()=>{
        const unsubscribe = store.subscribe(()=>{
            forceUpdate();
        })
        return ()=>{
            unsubscribe();
        }
    },[store])
    return selectedState;
}
