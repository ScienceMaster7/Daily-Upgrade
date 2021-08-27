import HabitList from "../components/HabitList";
import "./Home.css";

export default function Home() {
  const habits = JSON.parse(localStorage.getItem("habits"));
  return (
    <>
      <main className="Home__main">
        <HabitList habits={habits} />
      </main>
    </>
  );
}
