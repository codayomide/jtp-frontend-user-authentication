import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
