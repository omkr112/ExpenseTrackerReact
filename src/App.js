import './App.css';
import React,{useState} from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import TotalBalance from './Components/TotalBalance';
function App() {

  const [expenses,setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses,expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id!== id));
  };
  
  return (
    <div>
      <h1>Expense Tracker</h1>
      <TotalBalance expenses={expenses}/>
      <ExpenseForm addExpense={addExpense}/>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
