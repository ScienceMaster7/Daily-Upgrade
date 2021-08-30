import { useState } from "react";

export default function ChallengeCard({ challengeObject }) {
  const [isStart, setIsStart] = useState(challengeObject.isStarted);
  // const [isFinish, setIsFinish] = useState(false);
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
    setIsStart(true);
    const challenges = JSON.parse(localStorage.getItem("challenges"));
    const updatedChallenge = challenges.map((challenge) => {
      let update;
      if (challenge.name === challengeObject.name) {
        update = {
          name: challengeObject.name,
          description: challengeObject.description,
          duration: challengeObject.duration,
          isStarted: true,
        };
      } else {
        update = challenge;
      }
      return update;
    });
    localStorage.setItem("challenges", JSON.stringify(updatedChallenge));
  }
  function handleOnClickReset() {
    console.log("reset");
  }
  function handleOnClickDone(params) {
    console.log("Done");
  }
  // function handleOnClickFinish(params) {
  //   console.log("Finish")
  // }
  return (
    <section className="CurrentChallenges__card">
      <h2 className="CurrentChallenges__card__heading">
        {challengeObject.name}
      </h2>
      <p className="CurrentChallenges__card__text">
        {challengeObject.description}
      </p>

      {!isStart && (
        <>
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
        </>
      )}
      {isStart && (
        <>
          <p className="CurrentChallenges__card__text">
            Duration: {challengeObject.duration} Days
          </p>
          <button
            onClick={handleOnClickReset}
            className="CurrentChallenges__card__button-decline"
          >
            Reset
          </button>
          <button
            onClick={handleOnClickDone}
            className="CurrentChallenges__card__button-accept"
          >
            Done
          </button>
        </>
      )}
    </section>
  );
}
