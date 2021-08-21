import { useState } from "react";
import todaysDate from "../services/todaysDate";
import StreakItems from "./StreakItems";
import SelectMonths from "./SelectMonths";

export default function CardContent({ dateTracker }) {
  const monthNames = [
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
  const [month, setMonth] = useState(today[1]);
  const [year, setYear] = useState(today[2]);

  const allDates = dateTracker.map((dateObject) => {
    return dateObject.date;
  });

  const datesCurrentMonth = allDates.filter((date) => {
    return date[1] === month && date[2] === year;
  });

  const currentMonthDays = datesCurrentMonth.map((date) => {
    return date[0];
  });

  const [days, setDays] = useState(currentMonthDays);
  const [availableMonths, setAvailableMonths] = useState();

  const [monthSelection, setMonthSelection] = useState(false);

  function onClickHandleMonth() {
    const datesSelectedYear = allDates.filter((date) => {
      return date[2] === year;
    });
    let months = [];

    for (let i = 0; i < datesSelectedYear.length; i++) {
      const date = datesSelectedYear[i];
      if (!months.includes(date[1])) {
        months.push(date[1]);
      }
    }
    setAvailableMonths(months);
    setMonthSelection(true);
  }
  return (
    <>
      <h3 onClick={onClickHandleMonth} className="card__month">
        {monthNames[month]}
      </h3>
      <h3 className="card__year">{year}</h3>
      {monthSelection === false && (
        <div className="card__streak">
          <StreakItems days={days} />
        </div>
      )}
      {monthSelection === true && (
        <div>
          <SelectMonths monthNames={monthNames} months={availableMonths} />
        </div>
      )}
    </>
  );
}
