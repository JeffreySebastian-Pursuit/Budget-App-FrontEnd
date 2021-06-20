import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {apiURL} from '../Util/apiURL.js'
const API = apiURL();

const TransactionDetails = (props) => {
  const { deleteTransaction } = props;
  const [myTransaction, setMyTransaction] = useState({});
  let { id } = useParams();
  let history = useHistory();

  const fetchTransaction = async () => {
    //   debugger
    try {
      const res = await axios.get(`${API}/transactions/${id}`);
      console.log(res)
      debugger
      setMyTransaction(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTransaction();
  }, []);

  const handleDelete = () => {
    deleteTransaction(id);
    history.push("/transactions");
  };

  const { from, date, name, amount } = myTransaction;

  return (
    <div>
      <h1>Transaction Details</h1>
      <p>Date: {date}</p>
      <p>Name: {name}</p>
      <p>Amount: {amount}</p>
      <p>From: {from}</p>
      <Link to={`/transactions`}>
        <button  class="ms-2 btn btn-outline-light">Back</button>
      </Link>
      <Link to={`/transactions/new`}>
        <button class="ms-2  btn btn-success btn-outline-light text-dark">Create</button>
      </Link>
      <Link to={`/transactions/${id}/edit`}>
        <button  class="ms-2  btn btn-warning btn-outline-light text-dark">Edit</button>
      </Link>
      <button onClick={handleDelete} class="ms-2  btn btn-danger btn-outline-light text-dark">Delete</button>
    </div>
  );
};

export default TransactionDetails;
