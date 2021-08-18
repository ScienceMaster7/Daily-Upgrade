export default function StreakItems({ dates }) {
  const renderedDates = dates.map((date, index) => {
    return (
      <div key={index} className="streak__item">
        <p className="streak__item__date">{date.date[0]}</p>
      </div>
    );
  });
  return renderedDates;
}
