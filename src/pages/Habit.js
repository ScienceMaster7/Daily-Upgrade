import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Habit.css";
import calculateLevels from "../services/CalculateLevels";
export default function Habit() {
  const { habitname } = useParams();
  const [habit, setHabit] = useState([]);

  const maxLevel = 1000;

  useEffect(() => {
    const habitList = localStorage.getItem("habits");
    const habits = JSON.parse(habitList);
    const findHabit = habits.find((habit) => {
      return habit.name === habitname;
    });
    /* I set the state here so that on first render the current level in 
    a habit, the remaining time until the next level and current rank of 
    the user in that habit are displayed */
    setHabit([findHabit.level, findHabit.remainingTime, findHabit.rank]);
  }, [habitname]);

  function handleOnSubmit(event) {
    event.preventDefault();

    const habitList = localStorage.getItem("habits");
    const habits = JSON.parse(habitList);

    const form = event.target;
    const hours = Number(form.hours.value) * 60;
    const minutes = form.minutes.value;
    const time = hours + Number(minutes);

    const updatedHabits = habits.map((habit) => {
      if (habit.name === habitname) {
        const updatedTimeCount = habit.timeCount + time;
        const currentLevel = habit.level;
        const levelAndTime = calculateLevels(currentLevel, updatedTimeCount);
        const updatedLevel = levelAndTime[0];
        const updatedRemainigTime = levelAndTime[1];
        const updatedprogressPercentage = levelAndTime[2];
        const updatedRank = levelAndTime[3];
        /* I call setHabit here because the user has submited time which 
          might impact the level and the rank and definitly impact the remaining
          time until the next level.*/
        setHabit([updatedLevel, updatedRemainigTime, updatedRank]);

        /* I return a new object so that the habit list in local storage is
        also updated. */
        return {
          name: habit.name,
          timeCount: updatedTimeCount,
          level: updatedLevel,
          remainingTime: updatedRemainigTime,
          progressPercentage: updatedprogressPercentage,
          rank: updatedRank,
        };
      } else {
        return habit;
      }
    });
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
    form.reset();
  }
  return (
    <>
      <main className="Habit__main">
        <h2 className="Habit__title">{habitname}</h2>
        <p className="Habit__text">{habit[2]}</p>
        <p className="Habit__text">Current Level {habit[0]}</p>
        {habit[0] < maxLevel && (
          <form onSubmit={handleOnSubmit} className="Habit__form">
            <section className="Habit__time">
              <div>
                <label className="Habit__label" htmlFor="hours">
                  Hours:
                </label>
                <input
                  type="number"
                  className="Habit__input"
                  name="hours"
                  id="hours"
                  autoComplete="off"
                  min="0"
                  max="20"
                  placeholder="3"
                  required
                />
              </div>
              <div>
                <label className="Habit__label" htmlFor="minutes">
                  Minutes:
                </label>
                <input
                  type="number"
                  className="Habit__input"
                  name="minutes"
                  id="minutes"
                  autoComplete="off"
                  min="0"
                  max="59"
                  placeholder="20"
                  required
                />
              </div>
            </section>

            <p className="Habit__text">
              Remaining time till Level {habit[0] + 1}
            </p>
            <p className="Habit__text">{habit[1]} Minutes.</p>
            <button type="submit" className="Habit__button">
              Submit
            </button>
          </form>
        )}
        {habit[0] === maxLevel && (
          <p className="Habit__text">This is the highest possible level.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
