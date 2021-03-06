let ChainTask = require('./ChainTask');
let ChainTaskRunner = require('./ChainTaskRunner');


let chainTask1 = new ChainTask(()=>{
    chainTask1.start();
    console.log('test1');
    setTimeout(()=>{
        chainTask1.end();
    }, 3000);
    
});


let chainTask2 = new ChainTask(()=>{
    chainTask2.start();
    console.log('test2');
    setTimeout(()=>{
        chainTask2.end();
    }, 3000);
    
});


let chainTaskRunner = new ChainTaskRunner();
chainTaskRunner.addTask(chainTask1);
chainTaskRunner.addTask(chainTask2);