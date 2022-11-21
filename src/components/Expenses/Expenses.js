import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear)=>{
   setFilteredYear(selectedYear);
  }

  const filtereditem = props.items.filter((expense) => {
    return expense.date.getFullYear().toString()===filteredYear;
  });
   console.log(filtereditem.date);
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

      {filtereditem.map((expense) => (
        <ExpenseItem
           key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
     
    </Card>
  );
};

export default Expenses;
