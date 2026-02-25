import { Link } from "react-router-dom";
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-4 d-flex justify-content-between ">
      <div className="navbar-brand fw-bold">My API's</div>
      <div className="d-flex gap-4 align-items-center">
        <Link className="nav-link text-white" to="/">Home</Link>
        <Link className="nav-link text-white" to="/about">About</Link>
        <Link className="nav-link text-white" to="/contact">Contact</Link>
        <div className="dropdown">
        <button
          className="btn dropdown-toggle text-white rounded-4 border"
          type="button"
          data-bs-toggle="dropdown"
        >
          API's
        </button>

        <ul className="dropdown-menu ">
          <li>
            <Link className="dropdown-item" to="/weather">
              Weather
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/recipe">
              Recipes
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/store">
              Store
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}
