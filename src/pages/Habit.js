import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import "./Habit.css";

export default function Habit() {
  const { singlehabit } = useParams();

  function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.target;
    let hours = form.hours.value;
    hours = Number(hours) * 60;
    const minutes = form.minutes.value;
    const time = hours + Number(minutes);

    const habitList = localStorage.getItem("habits");
    const habits = JSON.parse(habitList);

    const updatedHabits = habits.map((habit) => {
      if (habit.name === singlehabit) {
        return { name: habit.name, timeCount: habit.timeCount + time };
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
        <h2 className="Habit__title">{singlehabit}</h2>
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
                required={true}
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
                required={true}
              />
            </div>
          </section>
          <button type="submit" className="Habit__button">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
