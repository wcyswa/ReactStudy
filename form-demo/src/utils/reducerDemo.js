/**
 * create by wangchunyan1 on 2021/12/21
 */
function f1(str) {
    return str;
}

function f2(str) {
    return str;
}

function f3(str) {
    return str;
}

// 三个函数 依次调用
compose(f1,f2,f3)('wcy');

function compose(...fn){
    return fn.reduce((acc, item)=>(...args)=>{
        acc(item(...args))
    })
}


const res = [1,2,3,4].reduce((acc, item)=>{
    return acc + item;
}, 10)
