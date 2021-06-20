import { useState } from "react";
import {useHistory } from "react-router-dom";
import "./NewTransaction.css";

const NewTransaction = (props) => {
  const [myTransaction, setMyTransaction] = useState({
    date: new Date().toDateString(),
    name: "",
    from: "",
    amount: 0,
  });
  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewTransaction(myTransaction);
    history.push("/transactions");
  };
  const handleTextChange = (e) => {
    setMyTransaction({ ...myTransaction, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <h1> Add a new item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date" className="text-start">
          Date
        </label>
        <input
          className="newItem"
          id="date"
          value={myTransaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <label htmlFor="name" className="text-start">
          Name
        </label>
        <input
          className="newItem"
          id="name"
          value={myTransaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />

        <label htmlFor="amount" className="text-start">
          Amount
        </label>
        <input
          className="newItem"
          id="amount"
          value={myTransaction.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="amount"
          required
        />

        <label htmlFor="from" className="text-start">
          From
        </label>
        <input
          className="newItem"
          id="from"
          value={myTransaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="from"
          required
        />
        <br />
        <button type="submit" className="btn btn-success">
          CREATE NEW ITEM
        </button>
      </form>
    </div>
  );
};

export default NewTransaction;
