import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Flight from "./Flight/Flight";
import Search from "./Search/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const initialDate = "02-01-2021";
  return (
    <Provider store={store}>
      <main className="page">
        <h1 className="title">Search flight</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <Search />
              <div className="buttons">
                <Link to={`/departure?date=${initialDate}`} className="button">
                  All departures
                </Link>
                <Link to={`/arrival?date=${initialDate}`} className="button">
                  All arrivals
                </Link>
              </div>
            </Route>
            <Route path="/:slug">
              <Search />
              <Flight />
            </Route>
          </Switch>
        </Router>
      </main>
    </Provider>
  );
};

export default App;
