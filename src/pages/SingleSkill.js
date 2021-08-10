import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import "./SingleSkill.css";

export default function SingleSkill() {
  const { habbit } = useParams();
  return (
    <>
      <Header />
      <main className="SingleSkill__main">
        <h2 className="SingleSkill__habbit">{habbit}</h2>
        <form className="SingleSkill__form">
          <input
            type="text"
            className="SingleSkill__input"
            name="timeInput"
            id="timeInput"
            placeholder="Enter your time here"
            autoComplete="off"
            required={true}
          />
          <button type="submit" className="SingleSkill__button">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
