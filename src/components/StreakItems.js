export default function StreakItems({ days, month, year, today }) {
  let renderedDays = [];
  let lastDay;

  if (month === today[1] && year === today[2]) {
    lastDay = days[days.length - 1];

  } else if (month === 1) {
    lastDay = 28;
  } else if (month % 2 === 0 && month < 7) {
    lastDay = 31;
  } else if (month % 2 === 0 && month > 6) {
    lastDay = 30;
  } else {
    lastDay = 31;
  }
  for (let i = 1; i <= lastDay; i++) {
    const renderedDay = (
      <div
        key={i}
        className={
          days.includes(i) ? "streak__item--active" : "streak__item--inactive"
        }
      >
        <p className="streak__item__date">{i}</p>
      </div>
    );
    renderedDays.push(renderedDay);
  }

  return renderedDays;
}
