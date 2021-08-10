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
import CreateNew from "./pages/CreateNew";
import SingleSkill from "./pages/SingleSkill";
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
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/create">
            <CreateNew />
          </Route>
          <Route path="/home">
            <Home />
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
