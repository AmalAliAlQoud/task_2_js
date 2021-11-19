//Variables
let time=0;
let timerId=0;
let timerOff=true;
//Elements in a variable
const start=document.querySelector("#start");
const end=document.querySelector("#reset");
const timer=document.querySelector("#time-display");
//use this function to start the timer

const initTimer=() =>{
    timerOff=false;
    timerId=setInterval(()=>{
        time++;
        timeCount();
    },1000);
};

const stopTimer=()=>{
clearInterval(timerId);
};

const timeCount=()=>{
    const min=Math.floor(time/60);
    const sec=time%60;
    if(sec<10){
        timer.innerHTML= min+':0'+sec;
        //'$(min):0$(sec)';
    }else{
        timer.innerHTML=min+':'+sec;
        //'$(min):$(sec)';

    }

};

//this function update the timer values

// stop and clear the timer

// Start the timer

start.addEventListener("click",function(){
    initTimer();
});

end.addEventListener("click",function(){
      stopTimer();
      timerOff
   });