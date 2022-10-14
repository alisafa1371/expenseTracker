import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSubmitForm(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            value={enteredTitle}
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="label">Amount</label>
          <input
            type="number"
            className="input"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label className="label">Date</label>
          <input
            type="date"
            className="input"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
