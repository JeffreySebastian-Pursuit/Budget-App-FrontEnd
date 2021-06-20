import { useState } from "react";
import { withRouter } from "react-router-dom";
import "./NewTransaction.css";

const NewTransaction = (props) => {
  const [myTransaction, setMyTransaction] = useState({
    date:  new Date().toDateString(),
    name: "",
    from: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewTransaction(myTransaction);
    props.history.push("/transactions");
  };
  const handleTextChange = (e) => {
    setMyTransaction({ ...myTransaction, [e.target.id]: e.target.value });
  };

  return (
    <div>
        <h1> Add a new item</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="date" class="text-start">
          Date
        </label>
        <input
          id="date"
          value={myTransaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <label htmlFor="name" class="text-start">
          Name
        </label>
        <input
          id="name"
          value={myTransaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />

        <label htmlFor="amount" class="text-start">
          Amount
        </label>
        <input
          id="amount"
          value={myTransaction.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="amount"
          required
        />

        <label htmlFor="from" class="text-start">
          From
        </label>
        <input
          id="from"
          value={myTransaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="from"
          required
        />
        <br />
        <button type="submit" class="btn btn-success">CREATE NEW ITEM</button>
      </form>
    </div>
  );
};

export default withRouter(NewTransaction);
