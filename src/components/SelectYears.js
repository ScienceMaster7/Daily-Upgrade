export default function SelectYears({ years, callBack }) {
  function handleOnClickNewYear(event) {
    callBack(event.target.value);
  }

  let renderedButtons = [];
  for (let i = 0; i < years.length; i++) {
    const monthButton = (
      <button onClick={handleOnClickNewYear} key={i} value={years[i]}>
        {years[i]}
      </button>
    );
    renderedButtons.push(monthButton);
  }
  return renderedButtons;
}
