import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import NavBar from "./Components/NavBar";

import { apiURL } from "./Util/apiURL";
const API = apiURL();

function App() {
  const [myTransactions, setMyTransactions] = useState([]);

  const addNewTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction);
      setMyTransactions([...myTransactions, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTransaction = async (updatedTransaction, id) => {
    try {
      await axios.put(`${API}/transactions/${id}`, updatedTransaction);
      const editTransaction = [...myTransactions];
      editTransaction[id] = updatedTransaction;
      setMyTransactions(editTransaction);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${API}/transactions/${id}`);
      const deleteIndex = [...myTransactions];
      deleteIndex.splice(id, 1);
      setMyTransactions(deleteIndex);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setMyTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/transactions">
            <Index myTransactions={myTransactions} />
          </Route>
          <Route exact path="/transactions/new">
            <New addNewTransaction={addNewTransaction} />
          </Route>
          <Route exact path="/transactions/:id/edit">
            <Edit updateTransaction={updateTransaction} />
          </Route>
          <Route exact path="/transactions/:id">
            <Show deleteTransaction={deleteTransaction} />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
