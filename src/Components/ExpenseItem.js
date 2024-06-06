import React from 'react';

const ExpenseItem = ({ expense, deleteExpense}) => {
    return (
        <div>
            <p>{expense.description}</p>
            <p>{expense.amount}</p>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </div>
    )
}
export default ExpenseItem;