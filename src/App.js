import Expense from "./components/Expenses/Expense";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

import { useState } from "react";
const TEST_INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(TEST_INITIAL_EXPENSES);
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div className="App-body">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={expenses} />
    </div>
  );
};

export default App;
