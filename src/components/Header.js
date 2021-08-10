import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "./colors.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/menu" className="link">
        <FontAwesomeIcon icon={faBars} className="menuIcon" />
      </Link>
      <h1 className="heading">Daily Upgrade</h1>
    </header>
  );
}
