import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseChart from "./ExpenseChart";
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };
  const filteredExpense = props.data.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseList filteredList={filteredExpense} />
    </Card>
  );
};

export default Expense;
