export default function ChallengeCard({ challengeObject }) {
  function handleOnClickDelete() {
    if (window.confirm("Do you realy want to delete this habit")) {
      const challenges = JSON.parse(localStorage.getItem("challenges"));

      const updatedChallenges = challenges.filter(
        (challenge) => challenge.name !== challengeObject.name
      );

      localStorage.setItem("challenges", JSON.stringify(updatedChallenges));
    }
  }
  function handleOnClickStart() {
    console.log("start clicked");
  }
  return (
    <section className="CurrentChallenges__card">
      <h2 className="CurrentChallenges__card__heading">
        {challengeObject.name}
      </h2>
      <p className="CurrentChallenges__card__text">
        {challengeObject.description}
      </p>
      <p className="CurrentChallenges__card__text">
        Duration: {challengeObject.duration} Days
      </p>
      <button
        onClick={handleOnClickDelete}
        className="CurrentChallenges__card__button-decline"
      >
        Delete
      </button>
      <button
        onClick={handleOnClickStart}
        className="CurrentChallenges__card__button-accept"
      >
        Start
      </button>
    </section>
  );
}
