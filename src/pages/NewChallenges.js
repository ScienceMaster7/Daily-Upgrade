import Footer from "../components/Footer";
import "./NewChallenges.css";
import validateAndStore from "../services/validateAndStore";

export default function NewChallenges() {
  function handleOnSubmitNewChallenge(event) {
    event.preventDefault();

    const form = event.target;
    const challengeName = form.challengeName.value;
    const challengeDescription = form.challengeDescription.value;
    const challengeDuration = form.challengeDuration.value;

    const newChallenge = {
      name: challengeName,
      description: challengeDescription,
      duration: challengeDuration,
      isStarted: false,
      completed: false,
    };

    validateAndStore("challenges", newChallenge, challengeName);
    form.reset();
  }
  return (
    <>
      <main className="NewChallenges__main">
        <form
          onSubmit={handleOnSubmitNewChallenge}
          className="NewChallenges__form"
        >
          <input
            className="NewChallenges__input"
            type="text"
            name="challengeName"
            id="challengeName"
            placeholder="Challenge Name"
            maxLength="30"
            autoComplete="off"
            required
          />
          <textarea
            className="NewChallenges__textarea"
            name="challengeDescription"
            id="challengeDescription"
            placeholder="Challenge Description"
            maxLength="200"
            autoComplete="off"
            required
          ></textarea>
          <input
            className="NewChallenges__input"
            type="number"
            name="challengeDuration"
            id="challengeDuration"
            placeholder="Challenge Duration in Days"
            min="1"
            max="100"
            autoComplete="off"
            required
          />
          <button className="NewChallenges__button" type="submit">
            Add
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
