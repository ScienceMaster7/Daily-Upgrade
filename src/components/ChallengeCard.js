export default function ChallengeCard({ challenge }) {
  return (
    <section className="CurrentChallenges__card">
      <h2 className="CurrentChallenges__card__heading">{challenge.name}</h2>
      <p className="CurrentChallenges__card__text">{challenge.description}</p>
      <p className="CurrentChallenges__card__text">
        Duration: {challenge.duration} Days
      </p>
      <button className="CurrentChallenges__card__button-decline">
        Delete
      </button>
      <button className="CurrentChallenges__card__button-accept">Start</button>
    </section>
  );
}
