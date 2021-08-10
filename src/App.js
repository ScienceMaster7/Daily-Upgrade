import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import CreateNew from "./pages/CreateNew";
function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
