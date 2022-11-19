import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  const [amount, setAmount] = useState(props.amount);
  const UpdateExpense = () => {
    setAmount("100");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        // location={props.location}
        amount={amount}
      />
      <button onClick={UpdateExpense}>Update Expense</button>
    </Card>
  );
};

export default ExpenseItem;
