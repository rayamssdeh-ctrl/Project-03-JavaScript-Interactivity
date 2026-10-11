// 1. Select HTML elements dynamically
const mainTitle = document.getElementById("main-title");
const description = document.querySelector(".description");
const toggleBtn = document.querySelector("#toggle-btn");

// 2. Change text content using .textContent
mainTitle.textContent = "Exercise 02: Live DOM Tree Modified!";
description.textContent = "Text content updated safely using .textContent.";

// 3. Alter styling properties directly
mainTitle.style.color = "#1565c0";

// 4. Toggle CSS classes using .classList
toggleBtn.addEventListener("click", () => {
    description.classList.toggle("active");
});
