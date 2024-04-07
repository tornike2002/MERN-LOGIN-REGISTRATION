import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar-links">
      <Link to="/">Home</Link>
      <Link to="/Register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
