export default function todaysDate() {
  let today = new Date();
  let date = [today.getDate(), today.getMonth() + 1, today.getFullYear()];

  today = date.join(".");

  return today;
}
