import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/todo">
            <Todo></Todo>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
