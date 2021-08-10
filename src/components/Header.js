import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "./colors.css";

export default function Header() {
  return (
    <header className="Header">
      <Link to="/menu" className="Header__link">
        <FontAwesomeIcon icon={faBars} className="Header__menuIcon" />
      </Link>
      <h1 className="Header__heading">Daily Upgrade</h1>
    </header>
  );
}
