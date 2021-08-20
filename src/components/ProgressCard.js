import CardContent from "./CardContent";

export default function ProgressCard({ habit }) {
  return (
    <section className="card">
      <h2 className="card__habitName">{habit.name}</h2>
      <CardContent dateTracker={habit.dateTracker} />
    </section>
  );
}
