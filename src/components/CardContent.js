import { useState } from "react";
import todaysDate from "../services/todaysDate";
import StreakItems from "./StreakItems";
import SelectMonths from "./SelectMonths";
import SelectYears from "./SelectYears";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

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
  const [isMonthSelection, setIsMonthSelection] = useState(false);
  const [availableYears, setAvailableYears] = useState();
  const [isYearSelection, setIsYearSelection] = useState(false);

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
    if (isYearSelection === true) {
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
      setIsMonthSelection(true);
    }
  }

  function monthCallback(newMonth) {
    const datesNewMonth = allDates.filter((date) => {
      return date[1] === Number(newMonth) && date[2] === year;
    });
    const newMonthDays = datesNewMonth.map((date) => {
      return date[0];
    });
    setMonth(Number(newMonth));
    setDays(newMonthDays);
    setIsMonthSelection(false);
  }

  function onClickHandleYear() {
    if (isMonthSelection === true) {
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
      setIsYearSelection(true);
    }
  }

  function yearCallback(newYear) {
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
    setYear(Number(newYear));
    setIsYearSelection(false);
  }
  return (
    <>
      <h3 onClick={onClickHandleYear} className="card__year">
        {year}
      </h3>
      <h4 onClick={onClickHandleMonth} className="card__month">
        {monthNames[month]}
      </h4>
      {isMonthSelection === false && isYearSelection === false && (
        <div className="card__streak">
          {days !== null && (
            <StreakItems days={days} month={month} year={year} today={today} />
          )}
        </div>
      )}
      {isMonthSelection && (
        <SelectMonths
          monthNames={monthNames}
          months={availableMonths}
          callBack={monthCallback}
        />
      )}
      {isYearSelection && (
        <SelectYears years={availableYears} callBack={yearCallback} />
      )}
    </>
  );
}

CardContent.propTypes = {
  dateTracker: PropTypes.array,
};
