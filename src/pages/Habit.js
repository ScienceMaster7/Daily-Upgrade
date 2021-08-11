import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import "./Habit.css";

export default function Habit() {
  const { habbit } = useParams();
  return (
    <>
      <main className="Habit__main">
        <h2 className="Habit__title">{habbit}</h2>
        <form className="Habit__form">
          <input
            type="text"
            className="Habit__input"
            name="timeInput"
            id="timeInput"
            placeholder="Enter your time here"
            autoComplete="off"
            required={true}
          />
          <button type="submit" className="Habit__button">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
