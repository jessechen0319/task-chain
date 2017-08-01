let ChainTask = require('./ChainTask');

function ChainTaskRunner(){
    this.taskQueue = [];
    this.isRunning = false;
    let that = this;
    this.addTask = (task)=>{
        if(task && task instanceof ChainTask){
            that.taskQueue.push(task);
            if(!that.isRunning){
                that.isRunning = true;
                that.startRun();
            }
        }
    };

    this.startRun = ()=>{
        //check if the list is empty
        console.log(`running with task length->${that.taskQueue.length}`)
        if(that.taskQueue.length==0){
            that.isRunning = false;
        } else {
            that.isRunning = true;
            let runningTask = that.taskQueue.shift();
            if(runningTask instanceof ChainTask){

                runningTask.on('start', function(){
                    console.log('the task is started now');
                });

                runningTask.on('end', function(){
                    console.log('the task is stoped');
                    that.startRun();
                });

                runningTask.processer.apply();
                
            }
        }
    };
}

module.exports = ChainTaskRunner;