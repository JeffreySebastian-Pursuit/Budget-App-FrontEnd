import { Link } from "react-router-dom";
import "./Transaction.css";
const Transaction = ({ transaction, id}) => {
  const { amount, date, name } = transaction;

  return (
    <div>
      <ul className="list-group">
        <li className="mt-3 list-group-item list-group-item-secondary">
          {date} <Link to={`/transactions/${id}`}>{name}</Link> {amount}
        </li>
      </ul>
    </div>
  );
};

export default Transaction;
