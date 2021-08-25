import PropTypes from "prop-types";

export default function SelectYears({ years, callBack }) {
  function handleOnClickNewYear(event) {
    callBack(event.target.value);
  }

  let renderedButtons = years.map((year, index) => {
    return (
      <button
        className="card__selectButton"
        onClick={handleOnClickNewYear}
        key={index}
        value={year}
      >
        {year}
      </button>
    );
  });
  return renderedButtons;
}

SelectYears.propTypes = {
  years: PropTypes.arrayOf(PropTypes.number),
  callBack: PropTypes.func,
};
