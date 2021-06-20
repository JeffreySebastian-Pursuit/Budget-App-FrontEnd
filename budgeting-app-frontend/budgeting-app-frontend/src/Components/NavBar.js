import { Link } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <Link  to="/">Home</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/transactions/new">New Transaction</Link>
    </nav>
  );
};

export default NavBar;
