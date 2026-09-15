/* ==============================
   SPENDWISE JAVASCRIPT
   ============================== */


/* ==============================
   1. APPLICATION DATA
   ============================== */

// Main monthly budget
let monthlyBudget = 2500;

// Expense data
let foodExpenses = 285;
let transportExpenses = 120;
let rentExpenses = 800;
let entertainmentExpenses = 95;
let utilitiesExpenses = 145;

// Savings
let savings = 650;


/* ==============================
   2. CALCULATE TOTAL EXPENSES
   ============================== */

function calculateTotalExpenses() {
    return (
        foodExpenses +
        transportExpenses +
        rentExpenses +
        entertainmentExpenses +
        utilitiesExpenses
    );
}


/* ==============================
   3. CALCULATE REMAINING BALANCE
   ============================== */

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


/* ==============================
   4. COLLECT USER INPUT
   ============================== */

// Ask the user for their monthly budget
let userBudget = prompt(
    "Welcome to SpendWise!\n\nEnter your monthly budget:"
);

// Convert the input from text to a number
userBudget = Number(userBudget);

// Ask the user for additional spending
let userExpenses = prompt(
    "Enter your total expenses for this month:"
);

// Convert the input from text to a number
userExpenses = Number(userExpenses);


/* ==============================
   5. PROCESS USER DATA
   ============================== */

// Check that the user entered valid numbers
if (!isNaN(userBudget) && !isNaN(userExpenses)) {

    // Calculate remaining balance
    let remainingBalance = calculateRemainingBalance(
        userBudget,
        userExpenses
    );

    // Display results in the browser console
    console.log("========== SpendWise Budget Summary ==========");

    console.log("Monthly Budget: $" + userBudget);

    console.log("Total Expenses: $" + userExpenses);

    console.log("Remaining Balance: $" + remainingBalance);

    console.log("==============================================");

} else {

    console.log(
        "SpendWise Error: Please enter valid numbers for your budget and expenses."
    );
}


/* ==============================
   6. CALCULATE DASHBOARD EXPENSES
   ============================== */

let totalDashboardExpenses = calculateTotalExpenses();

let dashboardRemainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalDashboardExpenses
);


/* ==============================
   7. DISPLAY APPLICATION DATA
   ============================== */

console.log("========== SpendWise Dashboard ==========");

console.log("Default Monthly Budget: $" + monthlyBudget);

console.log("Food Expenses: $" + foodExpenses);

console.log("Transport Expenses: $" + transportExpenses);

console.log("Rent Expenses: $" + rentExpenses);

console.log("Entertainment Expenses: $" + entertainmentExpenses);

console.log("Utilities Expenses: $" + utilitiesExpenses);

console.log("Savings: $" + savings);

console.log("Total Dashboard Expenses: $" + totalDashboardExpenses);

console.log(
    "Dashboard Remaining Balance: $" + dashboardRemainingBalance
);

console.log("==========================================");