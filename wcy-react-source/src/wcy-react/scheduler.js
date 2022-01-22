/**
 * create by wangchunyan1 on 2022/1/22
 */

/*
* 存储任务
* */
let taskQueue = [];
let timeQueue = [];

let deadline = 0;

let yieldInterval = 5; //任务间隔执行时间

export function scheduleCallback(callback){
    console.log('测试')
    const newTask = {callback};
    taskQueue.push(newTask);
    schedule(flushWork);
}

function schedule(callback){
    console.log(callback, '是什么')
    timeQueue.push(callback);
    postMessage();
}

const postMessage = function(){
    const {port1, port2} = new MessageChannel();
    port2.onmessage = function(){
        // 执行timerQueue中的任务并清空队列
        const temp = timeQueue.splice(0, timeQueue.length)
        temp.forEach(cb=>cb())
    }

    // 什么时候执行呢？ port1发送消息的时候执行
    port1.postMessage(null)
}

//是否要终止任务
export function shouldYield(){
    return getCurrentTime() >= deadline;
}

//执行任务
function flushWork(){
    // 更新任务deadline
    deadline = getCurrentTime() + yieldInterval; // 当前任务的结束时间 = 当前时间+执行任务的时间
    let currentTask = taskQueue[0]; // 按照任务优先级排序，将优先级高的任务放到顶部，这里只是简单的示例
    // 执行任务
    while (currentTask){
        currentTask.callback();
        // 将执行完的任务扔出队列
        taskQueue.shift();
        currentTask = taskQueue[0];
    }
}

export function getCurrentTime(){
    return performance.now();
}
