import { NavLink } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <NavLink  to="/">Home</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
      <NavLink to="/transactions/new">New Transaction</NavLink>
    </nav>
  );
};

export default NavBar;
