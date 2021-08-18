import todaysDate from "./todaysDate";

export default function updateDateTracker(datesArray, spentTime) {
  const today = todaysDate();

  if (datesArray[datesArray.length - 1].date !== today) {
    datesArray.push({
      date: today,
      timeToday: spentTime,
    });
  } else {
    datesArray[datesArray.length - 1].date =
      datesArray[datesArray.length - 1].date;
    datesArray[datesArray.length - 1].timeToday =
      datesArray[datesArray.length - 1].timeToday + spentTime;
  }
  return datesArray;
}
