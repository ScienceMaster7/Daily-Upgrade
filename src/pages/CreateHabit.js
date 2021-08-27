import Footer from "../components/Footer";
import "./CreateHabit.css";
import validateAndStore from "../services/validateAndStore";
import todaysDate from "../services/todaysDate";

export default function CreateHabit() {
  function handleOnSubmit(event) {
    event.preventDefault();

    const today = todaysDate();

    const form = event.target;
    const newHabitName = form.newHabit.value;

    const newHabit = {
      name: newHabitName,
      timeCount: 0,
      level: 0,
      remainingTime: 60,
      progressPercentage: 0,
      rank: "Beginner",
      dateTracker: [
        {
          date: today,
          timeToday: 0,
        },
      ],
    };

    validateAndStore("habits", newHabit, newHabitName);
    form.reset();
  }
  return (
    <>
      <main className="CreateHabit__main">
        <form className="CreateHabit__form" onSubmit={handleOnSubmit}>
          <input
            className="CreateHabit__input"
            type="text"
            name="newHabit"
            id="newHabit"
            placeholder="New Habit"
            autoComplete="off"
            maxLength="25"
            required
          />
          <button className="CreateHabit__button" type="submit">
            Add
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
