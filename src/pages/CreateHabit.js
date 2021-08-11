import Footer from "../components/Footer";
import "./CreateHabit.css";

export default function CreateHabit() {
  function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const newHabitName = form.newHabbit.value;
    const newHabit = { name: newHabitName, timeCount: 0 };

    const habbitList = localStorage.getItem("habbits");

    if (habbitList !== null) {
      let validated = true;

      const storedhabbits = JSON.parse(habbitList);

      storedhabbits.forEach((habit) => {
        if (habit.name === newHabitName) {
          validated = false;
        }
      });

      if (validated) {
        storedhabbits.push(newHabit);
        localStorage.setItem("habbits", JSON.stringify(storedhabbits));
      } else {
        alert("You already created this habit");
      }
    } else {
      const storedhabbits = [];
      storedhabbits.push(newHabit);
      localStorage.setItem("habbits", JSON.stringify(storedhabbits));
    }

    form.reset();
  }
  return (
    <>
      <main className="CreateHabit__main">
        <form className="CreateHabit__form" onSubmit={handleOnSubmit}>
          <input
            className="CreateHabit__input"
            type="text"
            name="newHabbit"
            id="newHabbit"
            placeholder="New Habbit"
            autoComplete="off"
            required={true}
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
