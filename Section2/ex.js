//Constructor function:
//de khoi tao qua cach nay thi chu cai dau tien trong ten ham phai duoc viet hoa

function Stopwatch(){
    this.duration=0;
    let startTime=0;
    let countStart=0;
    let countStop=0;
    this.Reset=function(){
        countStart=0;
        countStop=0;
        this.duration=0;
        console.log("The sw has been reset, time now is: ");
        console.log(this.duration);
    }

    this.Start=function(){
        countStart++;
        if(countStart>1){
            console.log("The SW has been started");
            return;
        }
        startTime=Date.now();
        console.log();
        console.log("The car is Running");
    }

    this.Stop=function(){
        countStop++;
        if(countStop>1) {
            console.log("The SW has been stoped");
            return;
        }
        this.duration=(Date.now()-startTime)/100;
        console.log("The car stopping, the running time is: ");
        console.log(this.duration);
    }

    Object.defineProperty(this,'stt',{
        get:function(){
            return startTime;
        },
    });
}
const sw=new Stopwatch();