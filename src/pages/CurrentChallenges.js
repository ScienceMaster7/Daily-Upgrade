import Footer from "../components/Footer";
import ChallengeCard from "../components/ChallengeCard";
import { useEffect, useState } from "react";
import "./CurrentChallenges.css";

export default function CurrentChallenges() {
  const [cards, setCards] = useState();

  useEffect(() => {
    const challenges = JSON.parse(localStorage.getItem("challenges"));
    if (!challenges || challenges.length === 0) {
      setCards(undefined);
    } else {
      const habitCards = challenges.map((challenge, index) => {
        return <ChallengeCard challengeObject={challenge} key={index} />;
      });

      setCards(habitCards);
    }
  }, []);
  return (
    <>
      {cards && <main className="CurrentChallenges__main">{cards}</main>}
      {cards === undefined && (
        <main className="CurrentChallenges__main">
          <p className="CurrentChallenges__text">
            There are no Challenges yet.
          </p>
        </main>
      )}
      <Footer />
    </>
  );
}
