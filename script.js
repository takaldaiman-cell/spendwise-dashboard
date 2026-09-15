/* =========================================
   SPENDWISE - INTERACTIVE JAVASCRIPT
   ========================================= */


/* =========================================
   1. APPLICATION DATA
   ========================================= */

// Monthly budget
let monthlyBudget = 2500;

// Expense records stored in an array
let expenses = [
    {
        id: 1,
        name: "Food",
        amount: 285
    },
    {
        id: 2,
        name: "Transport",
        amount: 120
    },
    {
        id: 3,
        name: "Rent",
        amount: 800
    },
    {
        id: 4,
        name: "Entertainment",
        amount: 95
    },
    {
        id: 5,
        name: "Utilities",
        amount: 145
    }
];

// Savings
let savings = 650;


/* =========================================
   2. GET HTML ELEMENTS
   ========================================= */

const budgetDisplay = document.getElementById("budget");
const budgetCard = document.getElementById("budget-card");

const totalExpensesDisplay =
    document.getElementById("total-expenses");

const remainingBalanceDisplay =
    document.getElementById("remaining-balance");

const savingsDisplay =
    document.getElementById("savings");

const expenseList =
    document.getElementById("expense-list");

const expenseCount =
    document.getElementById("expense-count");

const expenseForm =
    document.getElementById("expense-form");

const expenseNameInput =
    document.getElementById("expense-name");

const expenseAmountInput =
    document.getElementById("expense-amount");

const budgetMessage =
    document.getElementById("budget-message");

const progress =
    document.getElementById("progress");

const budgetPercentage =
    document.getElementById("budget-percentage");


/* =========================================
   3. CALCULATE TOTAL EXPENSES
   ========================================= */

function calculateTotalExpenses() {

    let total = 0;

    // Loop through the expenses array
    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

    }

    return total;
}


/* =========================================
   4. CALCULATE REMAINING BALANCE
   ========================================= */

function calculateRemainingBalance() {

    const totalExpenses = calculateTotalExpenses();

    const remainingBalance =
        monthlyBudget - totalExpenses;

    return remainingBalance;
}


/* =========================================
   5. DISPLAY EXPENSES
   ========================================= */

function displayExpenses() {

    // Clear the existing list
    expenseList.innerHTML = "";

    // Loop through every expense
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        // Create a new expense container
        const expenseItem =
            document.createElement("div");

        expenseItem.className = "expense-item";

        expenseItem.innerHTML = `
            <div class="expense-details">

                <div class="expense-icon-small">
                    $
                </div>

                <span class="expense-name">
                    ${expense.name}
                </span>

            </div>

            <strong class="expense-amount">
                $${expense.amount.toFixed(2)}
            </strong>

            <button
                class="delete-expense"
                data-id="${expense.id}"
                type="button"
            >
                Delete
            </button>
        `;

        // Add expense to the webpage
        expenseList.appendChild(expenseItem);
    }

    // Count the expenses
    const count = expenses.length;

    if (count === 1) {

        expenseCount.textContent = "1 expense";

    } else {

        expenseCount.textContent =
            count + " expenses";

    }
}


/* =========================================
   6. BUDGET DECISION MAKING
   ========================================= */

function updateBudgetMessage(balance) {

    // Check different budgeting situations

    if (balance < 0) {

        budgetMessage.textContent =
            "Warning: You have exceeded your monthly budget.";

    } else if (balance === 0) {

        budgetMessage.textContent =
            "Your budget has been fully used.";

    } else if (balance < 500) {

        budgetMessage.textContent =
            "Be careful. Your remaining budget is getting low.";

    } else {

        budgetMessage.textContent =
            "Good job! You are currently within your budget.";

    }
}


/* =========================================
   7. UPDATE PROGRESS BAR
   ========================================= */

function updateProgress(totalExpenses) {

    let percentage =
        (totalExpenses / monthlyBudget) * 100;

    // Prevent percentage from going above 100
    if (percentage > 100) {

        percentage = 100;

    }

    // Prevent percentage from going below 0
    if (percentage < 0) {

        percentage = 0;

    }

    // Update progress bar width
    progress.style.width =
        percentage + "%";

    // Update percentage text
    budgetPercentage.textContent =
        percentage.toFixed(1) + "%";
}


/* =========================================
   8. UPDATE DASHBOARD
   ========================================= */

function updateDashboard() {

    // Calculate total expenses
    const totalExpenses =
        calculateTotalExpenses();

    // Calculate remaining balance
    const remainingBalance =
        calculateRemainingBalance();

    // Update monthly budget
    budgetDisplay.textContent =
        "$" + monthlyBudget.toFixed(2);

    budgetCard.textContent =
        "$" + monthlyBudget.toFixed(2);

    // Update total expenses
    totalExpensesDisplay.textContent =
        "$" + totalExpenses.toFixed(2);

    // Update remaining balance
    remainingBalanceDisplay.textContent =
        "$" + remainingBalance.toFixed(2);

    // Update savings
    savingsDisplay.textContent =
        "$" + savings.toFixed(2);

    // Display expense records
    displayExpenses();

    // Update budget message
    updateBudgetMessage(remainingBalance);

    // Update progress bar
    updateProgress(totalExpenses);
}


/* =========================================
   9. ADD NEW EXPENSE
   ========================================= */

expenseForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get expense name
    const expenseName =
        expenseNameInput.value.trim();

    // Get expense amount
    const expenseAmount =
        Number(expenseAmountInput.value);


    /* -------------------------------------
       VALIDATE USER INPUT
       ------------------------------------- */

    if (expenseName === "") {

        budgetMessage.textContent =
            "Please enter an expense name.";

        return;
    }

    if (isNaN(expenseAmount) || expenseAmount <= 0) {

        budgetMessage.textContent =
            "Please enter a valid expense amount.";

        return;
    }


    /* -------------------------------------
       CREATE NEW EXPENSE
       ------------------------------------- */

    const newExpense = {
        id: Date.now(),
        name: expenseName,
        amount: expenseAmount
    };


    /* -------------------------------------
       ADD EXPENSE TO ARRAY
       ------------------------------------- */

    expenses.push(newExpense);


    /* -------------------------------------
       UPDATE DASHBOARD
       ------------------------------------- */

    updateDashboard();


    /* -------------------------------------
       CLEAR FORM
       ------------------------------------- */

    expenseForm.reset();


    /* -------------------------------------
       SHOW SUCCESS MESSAGE
       ------------------------------------- */

    budgetMessage.textContent =
        expenseName + " was added successfully.";

});


/* =========================================
   10. DELETE EXPENSE
   ========================================= */

expenseList.addEventListener("click", function(event) {

    // Check if the clicked element is a Delete button
    if (event.target.classList.contains("delete-expense")) {

        // Get the expense ID
        const expenseId =
            Number(event.target.dataset.id);


        // Create a new array without the deleted expense
        expenses = expenses.filter(function(expense) {

            return expense.id !== expenseId;

        });


        // Update dashboard
        updateDashboard();


        // Show success message
        budgetMessage.textContent =
            "Expense deleted successfully.";
    }

});


/* =========================================
   11. START APPLICATION
   ========================================= */

// Display the dashboard when the page loads
updateDashboard();