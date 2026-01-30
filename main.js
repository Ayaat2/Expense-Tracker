const expenseList = document.getElementById("expense-list");
const totalElement = document.querySelector(".total-expensel span");
const form = document.getElementById("expense-form");

// store the expenses in the array
let expenses = [];
// I used the object because every expense has more than one properties
const addExpense = (name, amount, date) => {
  const expense = {
    name: name,
    amount: amount,
    date: date,
  };
  expenses.push(expense);
  updateUI();
};
// View list of all expense items
const renderExpenses = () => {
  expenseList.innerHTML = "";
  expenses.forEach((expense, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.amount}</td>
            <td>${expense.date}</td>
            <td><button class="delete-btn" onclick="deleteExpense(${index})">Delete</button></td>
        `;
    expenseList.appendChild(row);
  });
};

// Calculate and display total expense amount
const calculateTotal = () => {
  let total = 0;
  expenses.forEach((expense) => {
    total += expense.amount;
  });
  totalElement.textContent = total;
};

// Delete individual expense items
const deleteExpense = (index) => {
  expenses.splice(index, 1);
  updateUI();
};

const updateUI = () => {
  renderExpenses();
  calculateTotal();
};

/* I used a form instead of the button “Add Expense” because: */
// Button → just triggers submit
// Form → listens to submit, works with click or Enter, and can reset inputs

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("expenseName").value;
  const amount = Number(document.getElementById("amount").value);
  const date = document.getElementById("date").value;

  if (!name || !amount || !date) {
    alert("Please fill all fields");
    return;
  }
  addExpense(name, amount, date);

  // It returns all inputs in the form to their original state
  //   It is a ready-made method from the DOM API
  form.reset();
});
