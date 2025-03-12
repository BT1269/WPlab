const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('timer-display');
const timerInput = document.getElementById('timer-input');

let timerInterval;
let timeLeft = 0;

function startTimer() {
  if (timerInterval) return; // Prevents multiple intervals
  timeLeft = parseInt(timerInput.value) || 0;
  if (timeLeft <= 0) {
    alert('Please enter a valid time');
    return;
  }

  updateDisplay();
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null; // Ensures the timer can be restarted
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null; // Allows restarting the timer after pausing
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 0;
  timerInput.value = ''; // Resets input field
  updateDisplay();
}

function updateDisplay() {
  timerDisplay.textContent = timeLeft;
  
  timerDisplay.classList.remove('green', 'yellow', 'red');

  if (timeLeft > 10) {
    timerDisplay.classList.add('green');
  } else if (timeLeft > 5) {
    timerDisplay.classList.add('yellow');
  } else if (timeLeft <= 5 && timeLeft > 0) {
    timerDisplay.classList.add('red');
  }
}

// Event listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
