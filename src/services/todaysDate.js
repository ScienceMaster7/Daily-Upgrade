export default function todaysDate() {
  let today = new Date();
  let date = [today.getDate(), today.getMonth(), today.getFullYear()];

  today = date.join(".");

  return today;
}
