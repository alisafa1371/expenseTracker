import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.filteredList.length === 0) {
    return <h2 className="expenses-list__fallback ">No expense found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredList.map((expenseItem) => (
        <ExpenseItem
          title={expenseItem.title}
          date={expenseItem.date}
          amount={expenseItem.amount}
          id={expenseItem.id}
          key={expenseItem.id}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
