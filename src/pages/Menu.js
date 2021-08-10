import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Menu.css";

export default function Menu() {
  return (
    <>
      <Header />
      <main className="main-menu">
        <NavLink to="/create" className="link">
          <button className="menuItem">Create New</button>
        </NavLink>
      </main>
      <Footer />
    </>
  );
}
