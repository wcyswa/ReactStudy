/**
 * create by wangchunyan1 on 2022/1/4
 */
import {useEffect, useLayoutEffect, useReducer} from "react";
import {countReducer} from "../../store/reduxDemo";
const init = (initArg) =>{
    return initArg - 0;
}
export default function HooksPage(props){

    const [num, setNum] = useReducer(countReducer, '0', init)

    useEffect(()=>{
        console.log('useEffect')
        return ()=>{
            console.log('useEffect unmount')
        }
    },[num])

    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        return ()=>{
            console.log('useLayoutEffect unmount')
        }
    },[num])

    return (
        <div>
            <h2>hooks page</h2>
            {num}
            <button onClick={() => setNum({type:'ADD', payload: 50})}>add</button>
        </div>
    )
}
