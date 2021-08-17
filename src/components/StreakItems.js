export default function StreakItems({ dates }) {
  const renderedDates = dates.map((date) => {
    return <div className="streak__item"></div>;
  });
  return renderedDates;
}
