import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import "./Habit.css";

export default function Habit() {
  const { habbit } = useParams();

  // function log(event) {
  //   const value = event.target.value;
  //   console.log(value);
  // }
  return (
    <>
      <main className="Habit__main">
        <h2 className="Habit__title">{habbit}</h2>
        <form className="Habit__form">
          <section className="Habit__time">
            <div>
              <label className="Habit__label" htmlFor="hours">
                Hours:
              </label>
              <input
                type="number"
                className="Habit__input"
                name="hours"
                id="hours"
                autoComplete="off"
                min="0"
                max="20"
                placeholder="3"
                required={true}
              />
            </div>
            <div>
              <label className="Habit__label" htmlFor="minutes">
                Minutes:
              </label>
              <input
                type="number"
                className="Habit__input"
                name="minutes"
                id="minutes"
                autoComplete="off"
                min="0"
                max="59"
                placeholder="20"
                required={true}
              />
            </div>
          </section>
          {/* <input
            onChange={log}
            type="range"
            name="hours"
            id="hours"
            min="0"
            max="23"
          /> */}
          <button type="submit" className="Habit__button">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
