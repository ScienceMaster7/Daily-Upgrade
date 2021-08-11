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
            <CreateHabit />
          </Route>
          <Route path="/:habbit">
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
