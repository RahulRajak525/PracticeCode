import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props)=> {
  const DeleteExpense = ()=>{
    console.log("clicked....");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      <button onClick={DeleteExpense} >Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
