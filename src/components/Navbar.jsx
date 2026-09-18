import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Movie Explorer</Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </nav>
  );
}

export default Navbar;