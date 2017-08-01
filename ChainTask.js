
var util = require('util');
var events = require('events');

function ChainTask(processer){
    let that = this;
    this.processer = processer?processer:()=>{
        that.start();
        that.end();
    };

    this.setProcesser = (processer)=>{
        this.processer = processer?processer:()=>{
            that.start();
            that.end();
        };
    };

    this.start = ()=>{
        that.emit('start');
    }

    this.end = ()=>{
        that.emit('end');
    }
}



util.inherits(ChainTask, events.EventEmitter);
module.exports = ChainTask;