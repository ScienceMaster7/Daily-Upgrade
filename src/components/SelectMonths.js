export default function SelectMonths({ monthNames, months, callBack }) {
  function handleOnClickNewMonth(event) {
    const month = event.target.value;
    callBack(month);
  }

  let renderedButtons = [];
  for (let i = 0; i < months.length; i++) {
    const monthButton = (
      <button onClick={handleOnClickNewMonth} key={i} value={months[i]}>
        {monthNames[months[i]]}
      </button>
    );
    renderedButtons.push(monthButton);
  }
  return renderedButtons;
}
