import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import "./Menu.css";
import "../components/colors.css";

export default function Menu() {
  return (
    <>
      <Header />
      <main className="main-menu">
        <NavLink to="/create" className="link">
          <button className="menuItem">Create New</button>
        </NavLink>
      </main>
    </>
  );
}
