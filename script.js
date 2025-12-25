// Counter Logic
let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

// Load from local storage
if (localStorage.getItem('simple-pwa-count')) {
    count = parseInt(localStorage.getItem('simple-pwa-count'));
    updateDisplay();
}

function updateDisplay() {
    counterDisplay.textContent = count;
    localStorage.setItem('simple-pwa-count', count);
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
