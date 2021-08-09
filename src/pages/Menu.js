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
          <h2>Create New</h2>
        </NavLink>
      </main>
    </>
  );
}
