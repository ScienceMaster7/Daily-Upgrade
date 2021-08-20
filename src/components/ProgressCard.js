import todaysDate from "../services/todaysDate";
import StreakItems from "./StreakItems";

export default function ProgressCard({ habit }) {
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
    <section className="card">
      <h2 className="card__habitName">{habit.name}</h2>
      <h3 className="card__month">{months[today[1]]}</h3>
      <h3 className="card__year">{today[2]}</h3>
      <div className="card__streak">
        <StreakItems days={currentMonthDays} />
      </div>
    </section>
  );
}
