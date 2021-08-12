import { Link } from "react-router-dom";

export default function HabitList() {
  const habits = JSON.parse(localStorage.getItem("habits"));

  if (habits !== null) {
    const renderedHabits = habits.map((habit, index) => {
      return (
        <Link key={index} to={`/${habit.name}`} className="Home__link">
          <button className="Home__button">{habit.name}</button>
        </Link>
      );
    });
    return renderedHabits;
  } else {
    return (
      <p className="Home__text--no-habbits">
        There are no habbits stored. You can find the Create New section in the
        Menu to create your first habbit.
      </p>
    );
  }
}
