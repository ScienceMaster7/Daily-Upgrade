import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <Link to="/home" className="link">
        <FontAwesomeIcon icon={faHome} className="Footer__homeIcon" />
      </Link>
    </footer>
  );
}
