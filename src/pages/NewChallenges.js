import Footer from "../components/Footer";
import "./NewChallenges.css";
export default function NewChallenges() {
  return (
    <>
      <main className="NewChallenges__main">
        <form className="NewChallenges__form">
          <input className="NewChallenges__input" type="text" />
          <button className="NewChallenges__button" type="submit">
            Add
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
