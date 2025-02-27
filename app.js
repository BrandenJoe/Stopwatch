const timerMilliseconds = document.querySelector('timer__milliseconds');
const timerSeconds = document.querySelector('timer__seconds');
const timerMinutes = document.querySelector('timer__minutes');

let cancelId;
let startTime
function startTimer(){
 startTime = Date.now();
 cancelId = requestAnimationFrame(updateTimer);
}
function stopTimer(){
    cancelAnimationFrame(cancelId);
}

function resetTimer(){

}



function updateTimer(){
    let milliElasped = Date.now() - startTime;

    timerMilliseconds.innerHTML = millisElapsed
cancelId = requestAnimationFrame(updateTimer);

}