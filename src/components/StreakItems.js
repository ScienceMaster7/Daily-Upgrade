export default function StreakItems({ dates }) {
  const renderedDates = dates.map((date, index) => {
    return (
      <div key={index} className="streak__item">
        <p className="streak__item__date">{date.date.slice(0, 2)}</p>
      </div>
    );
  });
  return renderedDates;
}
