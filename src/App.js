import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import CreateHabit from "./pages/CreateHabit";
import CreateHabitSubSkill from "./pages/CreateHabitSubSkill";
import SingleSkill from "./pages/SingleSkill";
import ChooseSkillType from "./pages/ChooseSkillType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <Link to="/menu" className="Header__link">
            <FontAwesomeIcon icon={faBars} className="Header__menuIcon" />
          </Link>
          <h1 className="Header__heading">Daily Upgrade</h1>
        </header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/create">
            <ChooseSkillType />
          </Route>
          <Route path="/single">
            <CreateHabit />
          </Route>
          <Route path="/multi">
            <CreateHabitSubSkill />
          </Route>
          <Route path="/:habbit">
            <SingleSkill />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
