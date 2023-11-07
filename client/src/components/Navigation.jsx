import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navTabs">
      <li className="navItem">
        <Link
          to="/"
          className={currentPage === "/" ? "navLink active" : "navLink"}
        >
          Home
        </Link>
      </li>
      <li className="navItem">
        <Link
          to="/login"
          className={currentPage === "/login" ? "navLink active" : "navLink"}
        >
          Login
        </Link>
      </li>
    </ul>
  );
}
