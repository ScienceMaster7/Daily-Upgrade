import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function HabitList() {
  const habits = JSON.parse(localStorage.getItem("habits"));

  if (habits !== null) {
    const renderedHabits = habits.map((habit, index) => {
      let percentage = 66;
      return (
        <Link key={index} to={`/${habit.name}`} className="Home__link">
          <button className="Home__button">
            <CircularProgressbar
              value={percentage}
              className="Home__progressbar"
            />
            <div className="Home__button__text">
              <p>{habit.name}</p>
              <p>Level: {habit.level}</p>
            </div>
          </button>
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
