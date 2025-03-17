const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('timer-display');
const timerInput = document.getElementById('timer-input');

let timerInterval;
let timeLeft = 0;

function startTimer() {
  if (timerInterval) return;
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
      timerInterval = null;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 0;
  timerInput.value = '';
  updateDisplay();
}

function updateDisplay() {
  timerDisplay.textContent = timeLeft;
  document.body.classList.remove('green', 'yellow', 'red');
  if (timeLeft > 10) {
    document.body.classList.add('green');
  } else if (timeLeft > 5) {
    document.body.classList.add('yellow');
  } else if (timeLeft <= 5 && timeLeft > 0) {
    document.body.classList.add('red');
  }
}


startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

const listInput = document.getElementById('list-input');
const addListItemBtn = document.getElementById('add-list-item');
const sortListBtn = document.getElementById('sort-list');
const removeDuplicatesBtn = document.getElementById('remove-duplicates');
const reverseListBtn = document.getElementById('reverse-list');
const listDisplay = document.getElementById('list-display');
let listItems = [];

addListItemBtn.addEventListener('click', () => {
  const item = listInput.value.trim();
  if (item) {
    listItems.push(item);
    listInput.value = '';
    updateListDisplay();
  }
});

sortListBtn.addEventListener('click', () => {
  listItems.sort();
  updateListDisplay();
});

removeDuplicatesBtn.addEventListener('click', () => {
  listItems = [...new Set(listItems)];
  updateListDisplay();
});

reverseListBtn.addEventListener('click', () => {
  listItems.reverse();
  updateListDisplay();
});

function updateListDisplay() {
  listDisplay.innerHTML = '';
  listItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listDisplay.appendChild(li);
  });
}

const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('age-input');
const addRowBtn = document.getElementById('add-row-btn');
const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

addRowBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  if (name && age) {
    const row = dataTable.insertRow();
    row.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td><button onclick="deleteRow(this)">Delete</button></td>
    `;
    nameInput.value = '';
    ageInput.value = '';
  }
});

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}


const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModalBtn = document.getElementById('close-modal');


thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = 'flex'; 
    modalImg.src = thumbnail.src; 
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'; 
  }
});

