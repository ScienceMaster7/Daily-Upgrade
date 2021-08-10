import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import "./Menu.css";

export default function Menu() {
  return (
    <>
      <main className="Menu__main">
        <NavLink to="/create" className="Menu__link">
          <button className="Menu__button">Create New</button>
        </NavLink>
      </main>
      <Footer />
    </>
  );
}
