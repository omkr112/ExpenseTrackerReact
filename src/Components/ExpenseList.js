import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense}) => {
    return (
        <div>
            <h2>Expenses</h2>
            {expenses.map(expense => (
                <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
            ))}
        </div>
    )
}
export default ExpenseList;