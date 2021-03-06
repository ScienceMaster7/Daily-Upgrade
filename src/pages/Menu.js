import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import "./Menu.css";

export default function Menu() {
  return (
    <>
      <main className="Menu__main">
        <NavLink to="/create" className="Menu__link">
          <button className="Menu__button">Add New Habit</button>
        </NavLink>
        <NavLink to="/progress-logs" className="Menu__Link">
          <button className="Menu__button">Progress Logs</button>
        </NavLink>
        <NavLink to="/guide" className="Menu__Link">
          <button className="Menu__button">Guide</button>
        </NavLink>
        <NavLink to="/challenges" className="Menu__Link">
          <button className="Menu__button">Challenges</button>
        </NavLink>
      </main>
      <Footer />
    </>
  );
}
