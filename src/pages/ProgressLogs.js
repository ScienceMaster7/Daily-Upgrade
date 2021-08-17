import Footer from "../components/Footer";
import StreakItems from "../components/StreakItems";
import "./ProgressLogs.css";

export default function ProgressLogs() {
  const habits = JSON.parse(localStorage.getItem("habits"));
  let dateAndTime;
  if (habits) {
    dateAndTime = habits.map((habit, index) => {
      console.log(habit.dateTracker[0].date);
      return (
        <section key={index} className="card">
          <h2 className="card__habitName">{habit.name}</h2>
          <div className="card__streak">
            <StreakItems dates={habit.dateTracker} />
          </div>
        </section>
      );
    });
  }
  return (
    <>
      <main className="ProgressLogs__main">{dateAndTime}</main>
      <Footer />
    </>
  );
}
