import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Confetti from "react-confetti";
import todaysDate from "../services/todaysDate";

export default function ChallengeCard({ challengeObject }) {
  const today = todaysDate();
  const [cardContent, setCardContent] = useState(challengeObject);
  const [isStart, setIsStart] = useState(challengeObject.isStarted);
  const [isFinish, setIsFinish] = useState(challengeObject.isFinish);
  const [isCompleted, setIsCompleted] = useState(challengeObject.completed);
  const [isConfettiRain, setIsConfettiRain] = useState(false);

  function handleOnClickDelete() {
    if (window.confirm("Do you realy want to delete this habit")) {
      const challenges = JSON.parse(localStorage.getItem("challenges"));

      const updatedChallenges = challenges.filter(
        (challenge) => challenge.name !== challengeObject.name
      );

      localStorage.setItem("challenges", JSON.stringify(updatedChallenges));
    }
    setCardContent(null);
  }
  function handleOnClickStart() {
    setIsStart(true);
    const challenges = JSON.parse(localStorage.getItem("challenges"));
    const updatedChallenge = challenges.map((challenge) => {
      let update;
      if (challenge.name === challengeObject.name) {
        if (Number(challenge.duration) === 1) {
          setIsFinish(true);
          update = {
            name: challengeObject.name,
            description: challengeObject.description,
            duration: challengeObject.duration,
            currentDuration: challengeObject.duration,
            startDate: today,
            isStarted: true,
            isDone: false,
            isFinish: true,
          };
        } else {
          update = {
            name: challengeObject.name,
            description: challengeObject.description,
            duration: challengeObject.duration,
            currentDuration: challengeObject.duration,
            startDate: today,
            isStarted: true,
            isDone: false,
            isFinish: false,
            completed: challenge.completed,
          };
        }

        setCardContent(update);
      } else {
        update = challenge;
      }
      return update;
    });
    localStorage.setItem("challenges", JSON.stringify(updatedChallenge));
  }
  function handleOnClickReset() {
    setIsStart(false);
    const challenges = JSON.parse(localStorage.getItem("challenges"));
    const updatedChallenge = challenges.map((challenge) => {
      let update;
      if (challenge.name === challengeObject.name) {
        update = {
          name: challengeObject.name,
          description: challengeObject.description,
          duration: challengeObject.duration,
          isStarted: false,
          completed: challenge.completed,
        };
        setCardContent(update);
      } else {
        update = challenge;
      }
      return update;
    });
    localStorage.setItem("challenges", JSON.stringify(updatedChallenge));
  }
  function handleOnClickDone() {
    const challenges = JSON.parse(localStorage.getItem("challenges"));
    const updatedChallenge = challenges.map((challenge) => {
      let update;
      if (challenge.name === challengeObject.name) {
        if (challenge.startDate === today && challenge.isDone === false) {
          update = {
            name: challenge.name,
            description: challenge.description,
            duration: challenge.duration,
            currentDuration: Number(challenge.currentDuration) - 1,
            startDate: challenge.startDate,
            isStarted: true,
            isDone: true,
            doneDate: today,
            completed: challenge.completed,
          };
        } else if (challenge.doneDate !== today && challenge.isDone === false) {
          if (Number(challenge.currentDuration) === 2) {
            update = {
              name: challenge.name,
              description: challenge.description,
              duration: challenge.duration,
              currentDuration: Number(challenge.currentDuration) - 1,
              startDate: challenge.startDate,
              isStarted: true,
              isDone: true,
              doneDate: today,
              isFinish: true,
              completed: challenge.completed,
            };
            setIsFinish(true);
          } else {
            update = {
              name: challenge.name,
              description: challenge.description,
              duration: challenge.duration,
              currentDuration: Number(challenge.currentDuration) - 1,
              startDate: challenge.startDate,
              isStarted: true,
              isDone: true,
              doneDate: today,
              completed: challenge.completed,
            };
          }
        } else {
          update = challenge;
          toast("You already did this challenge today, comeback tomorrow.", {
            duration: 3000,
            icon: "❌",
          });
        }
        console.log(update);
        setCardContent(update);
      } else {
        update = challenge;
      }
      return update;
    });
    localStorage.setItem("challenges", JSON.stringify(updatedChallenge));
  }
  function handleOnClickFinish() {
    if (cardContent.isDone) {
      toast("Come back tomorrow, you already completed the part for today.", {
        duration: 3000,
        icon: "❌",
      });
    } else {
      const challenges = JSON.parse(localStorage.getItem("challenges"));
      const updateChallenge = challenges.map((challenge) => {
        let update;
        if (challenge.name === cardContent.name) {
          update = {
            name: challenge.name,
            description: challenge.description,
            duration: challenge.duration,
            completed: true,
            completionDay: today.join("."),
          };
          setIsCompleted(true);
        } else {
          update = {
            name: challenge.name,
            description: challenge.description,
            duration: challenge.duration,
            completed: challenge.completed,
            completionDay: challenge.completionDay,
          };
        }
        return update;
      });
      localStorage.setItem("challenges", JSON.stringify(updateChallenge));
      toast.success(
        `You have succesfully completed the Challenge ${challengeObject.name}`,
        {
          duration: 3000,
        }
      );
      setIsConfettiRain(true);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiRain(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isConfettiRain]);
  return (
    <>
      {cardContent === null && null}
      {isConfettiRain && <Confetti recycle={false} />}
      {cardContent !== null && isCompleted === false && (
        <section className="CurrentChallenges__card">
          <h2 className="CurrentChallenges__card__heading">
            {cardContent.name}
          </h2>
          <p className="CurrentChallenges__card__text">
            {cardContent.description}
          </p>

          {!isStart && (
            <>
              <p className="CurrentChallenges__card__text">
                Duration: {cardContent.duration} Days
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
                Duration: {cardContent.currentDuration} Days
              </p>
              <button
                onClick={handleOnClickReset}
                className="CurrentChallenges__card__button-decline"
              >
                Reset
              </button>

              {!isFinish && (
                <button
                  onClick={handleOnClickDone}
                  className="CurrentChallenges__card__button-accept"
                >
                  Done
                </button>
              )}

              {isFinish && (
                <button
                  onClick={handleOnClickFinish}
                  className="CurrentChallenges__card__button-accept"
                >
                  Finish
                </button>
              )}
            </>
          )}
        </section>
      )}
    </>
  );
}
