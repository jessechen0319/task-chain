
var EventEmitter = require('events').EventEmitter;

class ChainTask extends EventEmitter{

    constructor(processer){
        super();
        this.processer = processer?processer:()=>{
            this.start();
            this.end();
        };;
    }

    setProcesser(processer){
        this.processer = processer?processer:()=>{
            this.start();
            this.end();
        };
    }

    start(){
        this.emit('start');
    }

    end(){
        this.emit('end');
    }
}


module.exports = ChainTask;