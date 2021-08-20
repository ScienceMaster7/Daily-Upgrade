import { useEffect, useState } from "react";
import todaysDate from "../services/todaysDate";
import StreakItems from "./StreakItems";

export default function CardContent({ dateTracker }) {
  const [content, setContent] = useState();

  useEffect(() => {
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
    const allDates = dateTracker.map((dateObject) => {
      return dateObject.date;
    });

    const datesCurrentMonth = allDates.filter((date) => {
      return date[1] === today[1] && date[2] === today[2];
    });

    const currentMonthDays = datesCurrentMonth.map((date) => {
      return date[0];
    });

    const defaultContent = (
      <>
        <h3 className="card__month">{months[today[1]]}</h3>
        <h3 className="card__year">{today[2]}</h3>
        <div className="card__streak">
          <StreakItems days={currentMonthDays} />
        </div>
      </>
    );
    setContent(defaultContent);
  }, [dateTracker]);

  return <div>{content}</div>;
}
