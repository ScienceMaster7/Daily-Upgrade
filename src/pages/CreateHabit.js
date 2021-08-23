import Footer from "../components/Footer";
import "./CreateHabit.css";
import toast, { Toaster } from "react-hot-toast";
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
          date: [7, 6, 2020],
          timeToday: 0,
        },
        {
          date: [8, 6, 2020],
          timeToday: 0,
        },
        {
          date: [9, 6, 2020],
          timeToday: 0,
        },
        {
          date: [1, 5, 2021],
          timeToday: 0,
        },
        {
          date: [2, 5, 2021],
          timeToday: 0,
        },
        {
          date: [3, 5, 2021],
          timeToday: 0,
        },
        {
          date: [4, 5, 2021],
          timeToday: 0,
        },
        {
          date: [5, 5, 2021],
          timeToday: 0,
        },
        {
          date: [27, 5, 2021],
          timeToday: 0,
        },
        {
          date: [28, 5, 2021],
          timeToday: 0,
        },
        {
          date: [29, 5, 2021],
          timeToday: 0,
        },
        {
          date: [30, 5, 2021],
          timeToday: 0,
        },
        {
          date: [31, 5, 2021],
          timeToday: 0,
        },
        {
          date: [9, 6, 2021],
          timeToday: 0,
        },
        {
          date: [13, 6, 2021],
          timeToday: 0,
        },
        {
          date: [14, 6, 2021],
          timeToday: 0,
        },
        {
          date: [16, 6, 2021],
          timeToday: 0,
        },
        {
          date: [17, 6, 2021],
          timeToday: 0,
        },
        {
          date: [21, 6, 2021],
          timeToday: 0,
        },
        {
          date: [22, 6, 2021],
          timeToday: 0,
        },
        {
          date: today,
          timeToday: 0,
        },
      ],
    };

    const habbitList = localStorage.getItem("habits");

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
        localStorage.setItem("habits", JSON.stringify(storedhabbits));
        toast.success(
          `You have Successfully added the habbit ${newHabitName}`,
          {
            duration: 3000,
          }
        );
      } else {
        toast("You already created this habit", {
          duration: 3000,
          icon: "❌",
        });
      }
    } else {
      const storedhabbits = [];
      storedhabbits.push(newHabit);
      localStorage.setItem("habits", JSON.stringify(storedhabbits));
      toast.success(`You have Successfully added the habbit ${newHabitName}`, {
        duration: 4000,
      });
    }
    form.reset();
  }
  return (
    <>
      <main className="CreateHabit__main">
        <Toaster />
        <form className="CreateHabit__form" onSubmit={handleOnSubmit}>
          <input
            className="CreateHabit__input"
            type="text"
            name="newHabit"
            id="newHabit"
            placeholder="New Habit"
            autoComplete="off"
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
