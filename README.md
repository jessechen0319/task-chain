# task-chain

this is project is about running tasks one by one.

you can import the task runner and task object as:
`
let ChainTask = require('task-chain').ChainTask;
let ChainTaskRunner = require('task-chain').ChainTaskRunner;
`

for eack banch of tasks, you need to create a task runner:

`let chainTaskRunner = new ChainTaskRunner();`

after that, you can push your task to the task runner:

`let chainTask1 = new ChainTask(()->{ setTimeout(function(){chainTask1.end()}, 2000) }); `

`chainTaskRunner.addTask(chainTask1);`

but in your processer or your task, you need to call

`yourTask.end()`

to end the task, if you donot end the task manually, the task will keep running~!

for more detail, you can refer to example: ChainTaskTester.js


GITHUB: https://github.com/jessechen0319/task-chain
