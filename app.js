var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");
var clickSound = document.getElementById("clickSound");
var mins = document.getElementById("mins");
var secs = document.getElementById("secs");
let intervalId;
let minutes = 0;
let seconds = 0;

// for starting the stop-watch
btnStart.addEventListener("click", () => {
  clickSound.play();
  intervalId = setInterval(() => {
    seconds++;
    // console.log("Seconds : " + seconds);
    secs.innerText = seconds;
    if (seconds % 60 == 0) {
      minutes++;
      //   console.log("Minutes : " + minutes);
      mins.innerText = minutes;
      seconds = 0;
    }
  }, 1000);
});

// for stopping the stop-watch
btnStop.addEventListener("click", () => {
  clickSound.play();
  clearInterval(intervalId);
});

// for reseting the stop-watch
btnReset.addEventListener("click", () => {
  clickSound.play();
  clearInterval(intervalId);
  mins.innerText = 0;
  secs.innerText = 0;
  minutes = 0 , seconds = 0;
});
