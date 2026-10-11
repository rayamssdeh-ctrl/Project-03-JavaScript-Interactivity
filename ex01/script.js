// 1. Function calculateGrade(score) with validation and strict comparison
function calculateGrade(score) {
    // Input validation: check if score is a number and within valid range (0-100)
    if (typeof score !== "number" || isNaN(score) || score < 0 || score > 100) {
        return "Invalid Score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// 2. Function checkAccess(age, hasTicket) using strict equality and logical operators
function checkAccess(age, hasTicket) {
    const minAge = 18;
    // Must be 18 or older AND have a valid ticket
    if (typeof age !== "number" || typeof hasTicket !== "boolean") {
        return false;
    }
    return (age >= minAge) && hasTicket;
}

// 3. Testing functions with boundary cases and logging to console
console.log("--- Testing calculateGrade ---");
console.log("Score 100:", calculateGrade(100)); // Expected: A
console.log("Score 90:", calculateGrade(90));   // Expected: A
console.log("Score 89:", calculateGrade(89));   // Expected: B
console.log("Score 0:", calculateGrade(0));     // Expected: F
console.log("Score Invalid (-5):", calculateGrade(-5)); // Expected: Invalid Score
console.log("Score Invalid (String):", calculateGrade("90")); // Expected: Invalid Score

console.log("\n--- Testing checkAccess ---");
console.log("Age 20, Ticket true:", checkAccess(20, true));   // Expected: true
console.log("Age 17, Ticket true:", checkAccess(17, true));   // Expected: false
console.log("Age 25, Ticket false:", checkAccess(25, false)); // Expected: false
