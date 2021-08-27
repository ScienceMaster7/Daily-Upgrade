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
import Habit from "./pages/Habit";
import ProgressLogs from "./pages/ProgressLogs";
import Guide from "./pages/Guide";
import Challenges from "./pages/Challenges";
import NewChallenges from "./pages/NewChallenges";
import CurrentChallenges from "./pages/CurrentChallenges";
import Accomplishments from "./pages/Accomplishments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <Toaster />
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
            <CreateHabit />
          </Route>
          <Route path="/progress-logs">
            <ProgressLogs />
          </Route>
          <Route path="/guide">
            <Guide />
          </Route>
          <Route path="/challenges">
            <Challenges />
          </Route>
          <Route path="/new-challenge">
            <NewChallenges />
          </Route>
          <Route path="/current-challenge">
            <CurrentChallenges />
          </Route>
          <Route path="/accomplishments">
            <Accomplishments />
          </Route>
          <Route path="/:habitname">
            <Habit />
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
