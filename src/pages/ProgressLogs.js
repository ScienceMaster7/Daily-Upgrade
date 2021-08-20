import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ProgressCard from "../components/ProgressCard";
import "./ProgressLogs.css";

export default function ProgressLogs() {
  const [cards, setCards] = useState();

  useEffect(() => {
    const habits = JSON.parse(localStorage.getItem("habits"));
    if (!habits || habits.length === 0) {
      setCards(undefined);
    } else {
      const habitCards = habits.map((habit, index) => {
        return <ProgressCard habit={habit} key={index} />;
      });

      setCards(habitCards);
    }
  }, []);

  return (
    <>
      {cards && <main className="ProgressLogs__main">{cards}</main>}
      {cards === undefined && <h2>No Habits. No Progress.</h2>}
      <Footer />
    </>
  );
}
