
import React from "react";
import  ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      LocationOfExpenditure: "Delhi",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      LocationOfExpenditure: "Haryana",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      LocationOfExpenditure: "Mumbai",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      LocationOfExpenditure: "Punjab",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
return (
  <div>
    <h1>Let's Gets Started</h1>
    <Expenses items={expenses} />
  </div>
);

// React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Let's Gets Started"),
//   React.createElement(Expenses, {items:expenses})
// );

}

export default App;
