import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../Util/apiURL";
const API = apiURL();

const TransactionEdit = (props) => {
  let { id } = useParams();
  let  history  = useHistory();

  const [myTransaction, setMyTransaction] = useState({
    date: new Date().toDateString(),
    name: "",
    from: "",
    amount: 0,
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    await props.updateTransaction(myTransaction, id);
    history.push(`/transactions/${id}`);
  };
  const handleTextChange = (e) => {
      debugger
    setMyTransaction({ ...myTransaction, [e.target.id]: e.target.value });
  };
  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${id}`);
      setMyTransaction(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTransaction();
  }, []);


  return (
    <div>
      <h1> Add a new item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date" class="form-label">
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
        <label htmlFor="name" class="form-label">
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

        <label htmlFor="amount" class="form-label">
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

        <label htmlFor="from" class="form-label">
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

export default TransactionEdit;
