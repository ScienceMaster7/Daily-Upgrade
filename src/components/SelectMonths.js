import PropTypes from "prop-types";

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

SelectMonths.propTypes = {
  monthNames: PropTypes.arrayOf(PropTypes.string),
  months: PropTypes.arrayOf(PropTypes.number),
  callBack: PropTypes.func,
};
