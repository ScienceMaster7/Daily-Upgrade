export default function SelectYears({ years, callBack }) {
  function handleOnClickNewYear(event) {
    callBack(event.target.value);
  }

  let renderedButtons = years.map((year, index) => {
    return (
      <button onClick={handleOnClickNewYear} key={index} value={year}>
        {year}
      </button>
    );
  });
  return renderedButtons;
}
