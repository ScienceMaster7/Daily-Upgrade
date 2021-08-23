import { useState } from "react";
import todaysDate from "../services/todaysDate";
import StreakItems from "./StreakItems";
import SelectMonths from "./SelectMonths";
import SelectYears from "./SelectYears";
import toast, { Toaster } from "react-hot-toast";

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
  const [availableMonths, setAvailableMonths] = useState();
  const [monthSelection, setMonthSelection] = useState(false);
  const [availableYears, setAvailableYears] = useState();
  const [yearSelection, setYearSelection] = useState(false);

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

  function onClickHandleMonth() {
    if (yearSelection === true) {
      toast("You can't select a month while selecting a Year");
    } else {
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
  }

  function monthCallback(newMonth) {
    setMonth(Number(newMonth));
    const datesNewMonth = allDates.filter((date) => {
      return date[1] === Number(newMonth) && date[2] === year;
    });
    const newMonthDays = datesNewMonth.map((date) => {
      return date[0];
    });
    setDays(newMonthDays);
    setMonthSelection(false);
  }

  function onClickHandleYear() {
    if (monthSelection === true) {
      toast("You can't select a year while selecting a month.");
    } else {
      let years = [];
      const allYears = allDates.map((date) => {
        return date[2];
      });

      for (let i = 0; i < allYears.length; i++) {
        if (!years.includes(allYears[i])) {
          years.push(allYears[i]);
        }
      }
      setAvailableYears(years);
      setYearSelection(true);
    }
  }

  function yearCallback(newYear) {
    setYear(Number(newYear));

    const datesCurrentMonth = allDates.filter((date) => {
      return date[1] === month && date[2] === Number(newYear);
    });

    if (datesCurrentMonth.length === 0) {
      setDays(null);
      toast(
        monthNames[month] +
          " is not available for " +
          newYear +
          ". Please check the available months.",
        { duration: 3000 }
      );
    } else {
      const currentMonthDays = datesCurrentMonth.map((date) => {
        return date[0];
      });
      setDays(currentMonthDays);
    }
    setYearSelection(false);
  }
  return (
    <>
      <Toaster />
      <h3 onClick={onClickHandleMonth} className="card__month">
        {monthNames[month]}
      </h3>
      <h3 onClick={onClickHandleYear} className="card__year">
        {year}
      </h3>
      {monthSelection === false && yearSelection === false && (
        <div className="card__streak">
          {days !== null && (
            <StreakItems days={days} month={month} today={today} />
          )}
        </div>
      )}
      {monthSelection === true && (
        <div>
          <SelectMonths
            monthNames={monthNames}
            months={availableMonths}
            callBack={monthCallback}
          />
        </div>
      )}
      {yearSelection === true && (
        <div>
          <SelectYears years={availableYears} callBack={yearCallback} />
        </div>
      )}
    </>
  );
}
