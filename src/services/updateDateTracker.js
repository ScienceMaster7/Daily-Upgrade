import todaysDate from "./todaysDate";

export default function updateDateTracker(datesArray, spentTime) {
  const today = todaysDate();
  if (datesArray[datesArray.length - 1].date.join(".") === today.join(".")) {
    console.log("this works");
    datesArray[datesArray.length - 1].date =
      datesArray[datesArray.length - 1].date;
    datesArray[datesArray.length - 1].timeToday =
      datesArray[datesArray.length - 1].timeToday + spentTime;
  } else {
    datesArray.push({
      date: today,
      timeToday: spentTime,
    });
  }
  return datesArray;
}
