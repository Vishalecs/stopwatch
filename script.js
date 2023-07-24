let intervalId;
let isRunning = false;
let milliseconds = 0;

function formatTime(ms) {
  const padZero = (num) => (num < 10 ? `0${num}` : num);
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centiseconds = Math.floor((ms % 1000) / 10);
  return `${padZero(minutes)}:${padZero(seconds)}:${padZero(centiseconds)}`;
}

function updateDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.innerText = formatTime(milliseconds);
}

function startStopwatch() {
  if (isRunning) return;

  isRunning = true;
  intervalId = setInterval(() => {
    milliseconds += 10;
    updateDisplay();
  }, 10);
}

function stopStopwatch() {
  clearInterval(intervalId);
  isRunning = false;
}

function resetStopwatch() {
  stopStopwatch();
  milliseconds = 0;
  updateDisplay();
}

document.getElementById("startStop").addEventListener("click", () => {
  if (isRunning) {
    stopStopwatch();
    document.getElementById("startStop").innerText = "Start";
  } else {
    startStopwatch();
    document.getElementById("startStop").innerText = "Stop";
  }
});

document.getElementById("reset").addEventListener("click", resetStopwatch);
