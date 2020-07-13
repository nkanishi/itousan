"use strict";

{
    const timer = document.getElementById("timer");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");

let startTime;
function countUp(){
    // console.log(Date.now() - startTime);
    const d = new date(Date.now() - startTime);
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = d.getMilliseconds();
    timer.textContent = `${m}:${s}:${ms}`;

    setTimeout(()=>{
      countUp();
    },10);
}

   start.addEventListener("click",()=>{
     startTime =Date.now();
     countUp();
   });
}