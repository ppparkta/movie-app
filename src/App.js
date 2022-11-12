import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import Group from "./routes/Group.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/group/:group">
          <Group />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
