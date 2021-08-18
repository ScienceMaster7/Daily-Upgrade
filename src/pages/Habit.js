import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import "./Habit.css";
import calculateLevels from "../services/CalculateLevels";
import updateDateTracker from "../services/updateDateTracker";
export default function Habit() {
  const { habitname } = useParams();
  const [habitState, setHabitState] = useState([]);

  const maxLevel = 1000;

  useEffect(() => {
    const habitList = localStorage.getItem("habits");
    const habits = JSON.parse(habitList);
    const findHabit = habits.find((habit) => {
      return habit.name === habitname;
    });

    if (findHabit) {
      setHabitState([findHabit.level, findHabit.remainingTime, findHabit.rank]);
    }
  }, [habitname]);

  function handleOnSubmit(event) {
    event.preventDefault();

    const habitList = localStorage.getItem("habits");
    const habits = JSON.parse(habitList);

    const form = event.target;
    const hours = Number(form.hours.value) * 60;
    const minutes = form.minutes.value;
    const time = hours + Number(minutes);
    console.log(time);
    if (time === 0) {
      toast("You can't submit 0 hours and zero minutes", {
        duration: 3000,
        icon: "❌",
      });
    } else {
      const updatedHabits = habits.map((habit) => {
        if (habit.name === habitname) {
          const updatedDateTracker = updateDateTracker(habit.dateTracker, time);
          const updatedTimeCount = habit.timeCount + time;
          const currentLevel = habit.level;
          const levelAndTime = calculateLevels(currentLevel, updatedTimeCount);
          const updatedLevel = levelAndTime[0];
          const updatedRemainigTime = levelAndTime[1];
          const updatedprogressPercentage = levelAndTime[2];
          const updatedRank = levelAndTime[3];

          if (updatedLevel > habitState[0]) {
            toast.success(
              `Congratulations on reaching Level ${updatedLevel} !`,
              {
                duration: 3000,
              }
            );
          }

          if (updatedRank !== habitState[2]) {
            toast.success(
              `Congratulations ! You are now a ${updatedRank} in ${habitname}`,
              { duration: 3000 }
            );
          }

          setHabitState([updatedLevel, updatedRemainigTime, updatedRank]);

          return {
            name: habit.name,
            timeCount: updatedTimeCount,
            level: updatedLevel,
            remainingTime: updatedRemainigTime,
            progressPercentage: updatedprogressPercentage,
            rank: updatedRank,
            dateTracker: updatedDateTracker,
          };
        } else {
          return habit;
        }
      });
      localStorage.setItem("habits", JSON.stringify(updatedHabits));
      form.reset();
    }
  }
  return (
    <>
      {habitState.length !== 0 && (
        <main className="Habit__main">
          <Toaster />
          <h2 className="Habit__title">{habitname}</h2>
          <p className="Habit__text">{habitState[2]}</p>
          <p className="Habit__text">Current Level {habitState[0]}</p>
          {habitState[0] < maxLevel && (
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
                Remaining time till Level {habitState[0] + 1}
              </p>
              <p className="Habit__text">{habitState[1]} Minutes.</p>
              <button type="submit" className="Habit__button">
                Submit
              </button>
            </form>
          )}
          {habitState[0] === maxLevel && (
            <p className="Habit__text">This is the highest possible level.</p>
          )}
        </main>
      )}
      {habitState.length === 0 && <h2>This site does not exist !</h2>}
      <Footer />
    </>
  );
}
