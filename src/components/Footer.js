import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <Link to="/home" className="link">
        <FontAwesomeIcon icon={faHome} className="homeIcon" />
      </Link>
    </footer>
  );
}
