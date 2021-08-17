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
        <NavLink to="/progressLogs" className="Menu__Link">
          <button className="Menu__button">Progress Logs</button>
        </NavLink>
      </main>
      <Footer />
    </>
  );
}
