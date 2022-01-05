/**
 * create by wangchunyan1 on 2022/1/4
 * 使用react-redux 用类组件
 */
import {Component} from "react";
// import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {connect} from "../../wcy-react-redux";

/*connect(
    // mapStateToProps
    // ({count})=>({count})
    (state) => {
        console.log(state, 'ownProps')
        return state;
    },
    // mapDispatchToProps object/function
    {
        add: ()=>({type:'ADD'}),
        minus: ()=>({type:'MINUS'})
    }
)*/

// 将store的state映射到props上
const mapStateToProps = () =>{
    return (state)=>{
        return {count: state.count}
    }
}

const mapDispatchToProps = () =>{
    /*
    * 以object返回，但是处理不dispatch add
    * */
    /*return {
        add :()=>({type:'ADD'}),
        minus: ()=>({type:'MINUS'})
    }*/
    return (dispatch)=>{
        let creators = {
            add: ()=>({type:'ADD'}),
            minus: ()=>({type:'MINUS'})
        }
        creators = bindActionCreators(creators, dispatch)
        return {dispatch, ...creators}
    }
}

class ReactReduxDemo extends Component{
    render() {
        console.log(this.props, 'props')
        const {count, dispatch, add, minus} = this.props;
        return (<div>
            <p>{count}</p>
            <button onClick={()=>{dispatch({type: 'ADD'})}}>dispatch add</button>
            <button onClick={add}>add</button>
            <button onClick={minus}>minus</button>
        </div>)
    }
}
export default connect(mapStateToProps(), mapDispatchToProps())(ReactReduxDemo);
