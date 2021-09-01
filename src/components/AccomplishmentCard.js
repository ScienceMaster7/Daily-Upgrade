import PropTypes from "prop-types";

export default function AccomplishmentCard({ challengeObject }) {
  return (
    <>
      {challengeObject.completed === true && (
        <section className="Accomplishments__card">
          <h2>{challengeObject.name}</h2>
          <p className="Accomplishments__text">{challengeObject.description}</p>
          <p className="Accomplishments__text">
            {challengeObject.completionDay}
          </p>
        </section>
      )}
    </>
  );
}
AccomplishmentCard.propTypes = {
  challengeObject: PropTypes.object,
};
