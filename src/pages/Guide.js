import Footer from "../components/Footer";
import "./Guide.css";
export default function Guide() {
  return (
    <>
      <main className="Guide__content">
        <p className="Guide__text">
          The <span className="Guide__text--highlight">purpose</span> of this
          App is to help you to{" "}
          <span className="Guide__text--highlight">be consistent</span> with
          your current habits and those that you want to have, by tracking the
          time spent on each habit.
        </p>
        <p className="Guide__text">
          Levels and ranks are an incentive to be consistent and thus submit
          time every day. The time needed to achieve the next Level increases
          with every rank to somewhat mirror the reality of Progress. At the
          beginning it is fairly easy to progress, but as you advance more and
          more it takes longer to achieve the next level.
        </p>
        <p className="Guide__text">
          When you have reached the Level of a{" "}
          <span className="Guide__text--highlight">Grand Master</span> you have
          spent{" "}
          <span className="Guide__text--highlight">about 10.000 hours</span> on
          this particular habit and definitely are worthy of that title.
        </p>
        <h2>ranks</h2>
        <ul className="Guide__list">
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
