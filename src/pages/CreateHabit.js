import Footer from "../components/Footer";
import "./CreateHabit.css";

export default function CreateHabit() {
  function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const newHabbit = form.newHabbit.value;

    const habbitList = localStorage.getItem("habbits");

    if (habbitList !== null) {
      const storedhabbits = JSON.parse(habbitList);
      storedhabbits.push(newHabbit);
      localStorage.setItem("habbits", JSON.stringify(storedhabbits));
    } else {
      const storedhabbits = [];
      storedhabbits.push(newHabbit);
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
