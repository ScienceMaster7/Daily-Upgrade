export default function ChallengeCard({ challengeObject }) {
  function handleOnClickDelete() {
    if (window.confirm("Do you realy want to delete this habit")) {
      const challengeList = localStorage.getItem("challenges");
      const challenges = JSON.parse(challengeList);

      const updatedHabitList = challenges.filter(
        (challenge) => challenge.name !== challengeObject.name
      );

      localStorage.setItem("challenges", JSON.stringify(updatedHabitList));
    }
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
      <button className="CurrentChallenges__card__button-accept">Start</button>
    </section>
  );
}
