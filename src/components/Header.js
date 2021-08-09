import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/menu">
        <FontAwesomeIcon icon={faBars} className="header__menuIcon" />
      </Link>
      <Link to="/home">
        <h1 className="header__title">Daily Upgrade</h1>
      </Link>
    </header>
  );
}
