import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const favorites = useSelector(
    (state) => state.favorites.items
  );

  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="navbar">

      <Link to="/" className="logo">
        OneCar
      </Link>

      <nav>
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/cars">
          Cars
        </NavLink>

        <NavLink to="/favorites">
          Favorites ({favorites.length})
        </NavLink>

        <NavLink to="/add-car">
          Add Car
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        {/* DARK MODE BUTTON */}
        <button
          className="theme-btn"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </nav>

    </header>
  );
}

export default Navbar;