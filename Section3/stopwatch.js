  function newStopWatch(){
    let startTime, endTime, running, duration = 0;

    //chinh thuoc tinh lai trong function cua no cung duoc
    Object.defineProperty(this, 'duration', {
      get: function() { return duration; }
    });
  }

  newStopWatch.prototype.start=function(){
    //bay gio neu ta chuyen sang kieu nay thi running khong con la bien toan cuc nua 
    //ma la bien cua ham khac, nen ta khong the goi nhu the nay duoc nua
    if (running) 
        throw new Error('Stopwatch has already started.');
      running = true; 
      startTime = new Date();
  }

  newStopWatch.prototype.stop=function(){
    if (!running) 
      throw new Error('Stopwatch is not started.');
    running = false; 
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds; 
  }

  newStopWatch.prototype.reset=function(){
    startTime = null;
    endTime = null;
    running = false; 
    duration = 0; 
  }



function Stopwatch() { 
  
}
