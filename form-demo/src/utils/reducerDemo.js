/**
 * create by wangchunyan1 on 2021/12/21
 */
function f1(str) {
    console.log(str, 'f1')
    return str;
}

function f2(str) {
    console.log(str, 'f2')
    return str;
}

function f3(str) {
    console.log(str, 'f3')
    return str;
}

// 三个函数 依次调用
compose(f1,f2,f3)('wcy');

function compose(...fn){
    console.log(fn, '函数')

    return fn.reduce((acc, item)=>(...args)=>{
        console.log(acc, ...args, '参数')
        acc(item(...args))
    })
}


const res = [1,2,3,4].reduce((acc, item)=>{
    return acc + item;
}, 10)
console.log(res, '累加结果')
