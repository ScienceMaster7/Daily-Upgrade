import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";

export default function Home() {
  function RenderHabbits() {
    const habbits = JSON.parse(localStorage.getItem("habbits"));

    if (habbits !== null) {
      const renderedhabbits = habbits.map((habbit, index) => {
        return (
          <Link key={index} to={`/${habbit}`} className="Home__link">
            <button className="Home__button">{habbit}</button>
          </Link>
        );
      });
      return renderedhabbits;
    } else {
      return (
        <p className="Home__text--no-habbits">
          There are no habbits stored. You can find the Create New section in
          the Menu to create your first habbit.
        </p>
      );
    }
  }
  return (
    <>
      <Header />
      <main className="Home__main">
        <RenderHabbits />
      </main>
    </>
  );
}
