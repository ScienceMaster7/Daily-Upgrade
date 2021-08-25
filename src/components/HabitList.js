import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Confetti from "react-confetti";

export default function HabitList() {
  const habits = JSON.parse(localStorage.getItem("habits"));

  if (!habits) {
    return (
      <>
        <Confetti recycle={false} />
        <h2> Welcome User!</h2>
        <p className="Home__text--first-visit">
          You can use this app to track how you progress in your already
          existing habits and those you wish to have.
        </p>
        <p className="Home__text--first-visit">
          You can submit the time that that you have spent on a particular habit
          and will be rewarded with Levels and Ranks.
        </p>
        <p className="Home__text--first-visit">
          You can find the Create New section in the Menu to create your first
          Habit and start to Level up. You can find further explanation on how
          to use this app in the Guide section.
        </p>
      </>
    );
  } else if (habits.length === 0) {
    return (
      <p className="Home__text--no-habbits">
        There are no habbits stored. You can find the Create New section in the
        Menu to create a new habbit.
      </p>
    );
  } else {
    const renderedHabits = habits.map((habit, index) => {
      let percentage = habit.progressPercentage;
      return (
        <Link key={index} to={`/${habit.name}`} className="Home__link">
          <button className="Home__button">
            <CircularProgressbar
              value={percentage}
              maxValue={1}
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
  }
}
