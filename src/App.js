import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./app.css";
import GuestList from "./pages/guestList/GuestList";
import Guest from "./pages/guest/Guest";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <div className="main__content">
            <Route exact path="/">
              <GuestList />
            </Route>
            <Route exact path="/:id">
              <Guest />
            </Route>
          </div>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
