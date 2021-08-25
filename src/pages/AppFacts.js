import Footer from "../components/Footer";
import "./AppFacts.css";
export default function AppFacts() {
  return (
    <>
      <main className="AppFacts__content">
        <h2>ranks</h2>
        <ul className="AppFacts__list">
          <li>Level 0 - 9 : Beginner</li>
          <li>Level 10 - 24 : Intermediate</li>
          <li>Level 25 - 74 : Advanced</li>
          <li>Level 75 - 199 : Professional</li>
          <li>Level 200 - 499 : Master</li>
          <li>Level 500 - 999 : Grand Master</li>
          <li>Level 1000 : Legend</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
