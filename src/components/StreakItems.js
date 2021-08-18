export default function StreakItems({ days }) {
  let renderedDays = [];
  for (let i = 0; i < days[days.length - 1]; i++) {
    if (days.includes(i)) {
      const renderedDay = (
        <div key={i} className="streak__item--active">
          <p className="streak__item__date">{i}</p>
        </div>
      );
      renderedDays.push(renderedDay);
    } else {
      const renderedDay = (
        <div key={i} className="streak__item--inactive">
          <p className="streak__item__date">{i}</p>
        </div>
      );
      renderedDays.push(renderedDay);
    }
  }

  return renderedDays;
}
