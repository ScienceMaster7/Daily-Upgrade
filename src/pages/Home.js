import Header from "../components/Header";
import "./Home.css";
import "../components/colors.css";

export default function Home() {
  function RenderHabbits() {
    const habbits = JSON.parse(localStorage.getItem("habbits"));

    if (habbits !== null) {
      const renderedhabbits = habbits.map((habbit, index) => {
        return (
          <button className="habbitButton" key={index}>
            {habbit}
          </button>
        );
      });
      return renderedhabbits;
    } else {
      return (
        <h2>
          There are no habbits stored. You can find the Create New section in
          the Menu to create your first habbit.
        </h2>
      );
    }
  }
  return (
    <>
      <Header />
      <main className="main-home">
        <RenderHabbits />
      </main>
    </>
  );
}
