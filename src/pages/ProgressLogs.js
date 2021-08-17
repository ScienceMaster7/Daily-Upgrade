import Footer from "../components/Footer";
import Calendar from "react-calendar";
// import StreakItems from "../components/StreakItems";
import "./ProgressLogs.css";

export default function ProgressLogs() {
  const habits = JSON.parse(localStorage.getItem("habits"));
  const dateAndTime = habits.map((habit, index) => {
    return (
      <section key={index} className="card">
        <h2 className="card__habitName">{habit.name}</h2>
        {/* <div className="card__streak">
          <StreakItems dates={habit.dateTracker} />
        </div> */}
        <Calendar />
      </section>
    );
  });
  return (
    <>
      <main className="ProgressLogs__main">{dateAndTime}</main>
      <Footer />
    </>
  );
}
