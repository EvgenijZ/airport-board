import { createStore, applyMiddleware, compose } from "redux";
import flightsReducer from "./Flight/flight.reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default createStore(
  flightsReducer,
  composeEnhancers(applyMiddleware(thunk))
);
