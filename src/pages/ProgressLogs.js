import Footer from "../components/Footer";
import StreakItems from "../components/StreakItems";
import todaysDate from "../services/todaysDate";
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
  let habitCards;
  if (habits) {
    habitCards = habits.map((habit, index) => {
      const today = todaysDate();
      const allDates = habit.dateTracker.map((dateObject) => {
        return dateObject.date;
      });

      const datesCurrentMonth = allDates.filter((date) => {
        return date[1] === today[1] && date[2] === today[2];
      });
      const currentMonthDays = datesCurrentMonth.map((date) => {
        return date[0];
      });
      return (
        <section key={index} className="card">
          <h2 className="card__habitName">{habit.name}</h2>
          <h3>{months[today[1]] + " " + today[2]}</h3>
          <div className="card__streak">
            <StreakItems days={currentMonthDays} />
          </div>
        </section>
      );
    });
  }
  return (
    <>
      {habitCards && <main className="ProgressLogs__main">{habitCards}</main>}
      {habitCards === undefined && <h2>No Habits. No Progress.</h2>}
      <Footer />
    </>
  );
}
