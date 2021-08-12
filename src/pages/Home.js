import HabitList from "../services/HabitList";
import "./Home.css";

export default function Home() {
  return (
    <>
      <main className="Home__main">
        <HabitList />
      </main>
    </>
  );
}
