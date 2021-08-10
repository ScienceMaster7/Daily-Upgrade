import Header from "../components/Header";
import "./Home.css";

export default function Home() {
  function RenderHabbits() {
    const habbits = JSON.parse(localStorage.getItem("habbits"));

    if (habbits !== null) {
      const renderedhabbits = habbits.map((habbit, index) => {
        return (
          <button className="Home__button" key={index}>
            {habbit}
          </button>
        );
      });
      return renderedhabbits;
    } else {
      return (
        <p className="Home__text--no-habbits">
          There are no habbits stored. You can find the Create New section in
          the Menu to create your first habbit.
        </p>
      );
    }
  }
  return (
    <>
      <Header />
      <main className="Home__main">
        <RenderHabbits />
      </main>
    </>
  );
}
