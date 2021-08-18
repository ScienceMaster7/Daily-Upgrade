export default function todaysDate() {
  let today = new Date();
  today = [today.getDate(), today.getMonth(), today.getFullYear()];

  return today;
}
