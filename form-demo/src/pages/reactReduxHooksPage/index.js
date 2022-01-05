/**
 * create by wangchunyan1 on 2022/1/4
 * 使用react-redux用hooks
 */
import {useDispatch, useSelector} from "../../wcy-react-redux";
import {useCallback} from "react";
const ReactReduxHooksPage = () =>{

    const dispatch = useDispatch();
    const add = useCallback(()=>{
        dispatch({type:'ADD',payload: 6})
    })
    const count = useSelector(({count})=>count)

    return (
        <div>
            <h2>react-redux hooks使用</h2>
            <button onClick={add}>{count}</button>
        </div>
    )
}

export default ReactReduxHooksPage;
