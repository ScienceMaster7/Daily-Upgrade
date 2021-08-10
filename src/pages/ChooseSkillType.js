import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import "./ChooseSkillType.css";

export default function ChooseSkillType() {
  return (
    <>
      <main className="ChooseSkillType__main">
        <NavLink to="/single" className="ChooseSkillType__link">
          <button className="ChooseSkillType__button">Add Single Skill</button>
        </NavLink>
        <NavLink to="/multi" className="ChooseSkillType__link">
          <button className="ChooseSkillType__button">Add Multi Skill</button>
        </NavLink>
      </main>
      <Footer />
    </>
  );
}
