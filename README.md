# Expense Tracker Project

## Project Description
This is a simple Expense Tracker project built using **HTML, CSS, and JavaScript**.  
The project allows the user to:

- Add an expense with **name, amount, and date**
- View all expense items in a table
- Delete individual expense items
- Calculate and display the **total expense amount**

---

## How it works
1. The **form** listens to the submit event.  
   - The user can submit by clicking the button or pressing Enter.  
   - The button just triggers the form submission.
2. When the form is submitted, the expense is stored as an **object** in the `expenses` array.
3. The `updateUI` function updates:
   - The table (using `renderExpenses`)  
   - The total amount (using `calculateTotal`)
4. The form is reset after submission using `form.reset()`.

---

## What I learned
- I learned how to **store data in arrays** and use **objects** to keep multiple properties.
- I learned how to **update the UI dynamically** with JavaScript.
- I learned why using a **form** is better than just a button.
- I practiced **functions separation** for better organization.

---

## How I used AI
I used AI to **understand the step-by-step logic** for adding, deleting, and rendering expenses in JavaScript.  
AI helped me **explain the logic clearly** and gave me guidance to write clean, structured code.  
I learned from AI **how to organize code with functions** and how to connect the form with the UI updates properly.

