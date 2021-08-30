import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import AccomplishmentCard from "../components/AccomplishmentCard";
import "./Accomplishments.css";

export default function Accomplishments() {
  const [cards, setCards] = useState();

  useEffect(() => {
    const challenges = JSON.parse(localStorage.getItem("challenges"));
    if (!challenges || challenges.length === 0) {
      setCards(undefined);
    } else {
      const habitCards = challenges.map((challenge, index) => {
        return <AccomplishmentCard challengeObject={challenge} key={index} />;
      });
      setCards(habitCards);
    }
  }, []);
  return (
    <>
      {!cards && (
        <main className="Accomplishments__main">
          <p className="Accomplishments__text">No Accomplishments yet.</p>
        </main>
      )}
      {cards && <main className="Accomplishments__main">{cards}</main>}
      <Footer />
    </>
  );
}
