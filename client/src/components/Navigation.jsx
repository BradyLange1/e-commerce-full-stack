import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="">
      <li className="btn">
        <Link
          to="/"
          className={currentPage === "/" ? "btn-active" : ""}
        >
          Home
        </Link>
      </li>
      <li className="btn">
        <Link
          to="/login"
          className={currentPage === "/login" ? "btn-active" : ""}
        >
          Login
        </Link>
      </li>
    </ul>
  );
}
