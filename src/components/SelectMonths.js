export default function SelectMonths({ monthNames, months, callBack }) {
  function handleOnClickNewMonth(event) {
    const month = event.target.value;
    callBack(month);
  }

  let renderedButtons = months.map((month, index) => {
    return (
      <button
        className="card__selectButton"
        onClick={handleOnClickNewMonth}
        key={index}
        value={month}
      >
        {monthNames[month]}
      </button>
    );
  });

  return renderedButtons;
}