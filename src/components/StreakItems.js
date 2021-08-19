export default function StreakItems({ days }) {
  let renderedDays = [];
  for (let i = 1; i < days[days.length - 1]; i++) {
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
