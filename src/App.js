import "./App.css";
import "./components/ExpenseItem";
import ExpenseItem from "./components/ExpenseItem";
function App() {
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
      title: "New Desk (Wooden)",
      LocationOfExpenditure: "Punjab",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <h1>Let's Gets Started</h1>
      <ExpenseItem
        title={expenses[0].title}
        location={expenses[0].LocationOfExpenditure}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        location={expenses[1].LocationOfExpenditure}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        location={expenses[2].LocationOfExpenditure}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        location={expenses[3].LocationOfExpenditure}
        date={expenses[3].date}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
