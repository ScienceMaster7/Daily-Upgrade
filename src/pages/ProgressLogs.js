import Footer from "../components/Footer";
import StreakItems from "../components/StreakItems";
import "./ProgressLogs.css";

export default function ProgressLogs() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const habits = JSON.parse(localStorage.getItem("habits"));
  let dateAndTime;
  if (habits) {
    dateAndTime = habits.map((habit, index) => {
      return (
        <section key={index} className="card">
          <h2 className="card__habitName">{habit.name}</h2>
          <h3>
            {months[habit.dateTracker[habit.dateTracker.length - 1].date[1]] +
              " " +
              habit.dateTracker[habit.dateTracker.length - 1].date[2]}
          </h3>
          <div className="card__streak">
            <StreakItems dates={habit.dateTracker} />
          </div>
        </section>
      );
    });
  }
  return (
    <>
      {dateAndTime && <main className="ProgressLogs__main">{dateAndTime}</main>}
      {dateAndTime === undefined && <h2>No Habits. No Progress.</h2>}
      <Footer />
    </>
  );
}
