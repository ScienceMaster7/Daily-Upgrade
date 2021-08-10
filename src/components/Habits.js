import { Link } from "react-router-dom";

export default function Habbits() {
  const habbits = JSON.parse(localStorage.getItem("habbits"));

  if (habbits !== null) {
    const renderedHabbits = habbits.map((habbit, index) => {
      return (
        <Link key={index} to={`/${habbit}`} className="Home__link">
          <button className="Home__button">{habbit}</button>
        </Link>
      );
    });
    return renderedHabbits;
  } else {
    return (
      <p className="Home__text--no-habbits">
        There are no habbits stored. You can find the Create New section in the
        Menu to create your first habbit.
      </p>
    );
  }
}
