// State variable
let count = 0;

// DOM Elements selection
const counterDisplay = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

// Function to update display and dynamic colors
function updateDisplay() {
    counterDisplay.textContent = count;
    
    // Remove previous color classes
    counterDisplay.classList.remove("positive", "negative", "zero");
    
    // Dynamically alter text colors
    if (count > 0) {
        counterDisplay.classList.add("positive");
    } else if (count < 0) {
        counterDisplay.classList.add("negative");
    } else {
        counterDisplay.classList.add("zero");
    }
}

// Event Listeners registration (avoiding inline HTML handlers)
incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});
