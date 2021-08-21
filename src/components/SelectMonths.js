export default function SelectMonths({ monthNames, months }) {
  let renderedButtons = [];
  for (let i = 0; i < months.length; i++) {
    const monthButton = (
      <button key={i} value={months[i]}>
        {monthNames[months[i]]}
      </button>
    );
    renderedButtons.push(monthButton);
  }
  return renderedButtons;
}
