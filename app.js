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
  btnStart.disabled = true;
  clickSound.play();
  intervalId = setInterval(() => {
    if (seconds==59) {
      seconds = 0;
      secs.innerText = seconds;
      minutes++;
      mins.innerText = minutes;
    }
    else{
      seconds++;
      secs.innerText = seconds;
    }

  }, 1000);
});

// for stopping the stop-watch
btnStop.addEventListener("click", () => {
  clickSound.play();
  clearInterval(intervalId);
  btnStart.disabled = false;
});

// for reseting the stop-watch
btnReset.addEventListener("click", () => {
  clickSound.play();
  clearInterval(intervalId);
  mins.innerText = 0;
  secs.innerText = 0;
  minutes = 0 , seconds = 0;
  btnStart.disabled = false;
});
