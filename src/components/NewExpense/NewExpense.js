import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const submitFormHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormVisibility(false);
  };
  const showFormHandler = () => {
    setFormVisibility(true);
  };
  const hideFormHandler = () => {
    setFormVisibility(false);
  };
  return (
    <div className="new-expense">
      {!formVisibility && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
      {formVisibility && (
        <ExpenseForm
          onSubmitForm={submitFormHandler}
          onCancelForm={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
