import Footer from "../components/Footer";
import "./CreateHabitSubSkill.css";

export default function CreateHabitSubSkill() {
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
      <main className="CreateHabitSubSkill__main">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="newHabbit"
            id="newHabbit"
            placeholder="New Habbit"
            autoComplete="off"
            required={true}
          />
          <button className="CreateHabitSubSkill__button" type="submit">
            Add
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
