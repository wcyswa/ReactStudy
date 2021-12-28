/**
 * create by wangchunyan1 on 2021/12/21
 */
import  React from 'react';
import store  from "../../store/reduxDemo";
export default class ReduxDemo extends React.Component{

    componentDidMount() {
        this.unSubscribe = store.subscribe(()=>{
            this.forceUpdate()
        })
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    add = () =>{
        store.dispatch({type:'ADD'})
    }

    addAsync = () =>{

        /* 处理异步 */
        setTimeout(()=>{
            store.dispatch({type: 'ADD'})
        })

        // store.dispatch((dispatch) => {
        //     setTimeout(() => {
        //         dispatch({type:'ADD'})
        //     }, 1000)
        // })
    }

    render() {
        return (
            <div>
                {store.getState()}
                <button onClick={this.add}>add</button>
                <button onClick={this.addAsync}>addAsync</button>
            </div>
        );
    }
}
