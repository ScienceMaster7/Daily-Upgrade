import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import "./Challenges.css";
export default function Challenges() {
  return (
    <>
      <main className="Challenges__main">
        <NavLink to="new-challenge">
          <button className="Challenges__button">New Challenge</button>
        </NavLink>
        <NavLink to="current-challenge">
          <button className="Challenges__button">Current Challenges</button>
        </NavLink>
        <NavLink to="accomplishments">
          <button className="Challenges__button">Accomplishments</button>
        </NavLink>
      </main>
      <Footer />
    </>
  );
}
