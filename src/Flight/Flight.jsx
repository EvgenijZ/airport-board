import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as flightsActions from "./flight.actions";
import { getFlightsSelector } from "./flight.selectors";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import FlightTable from "./FlightTable";
import "./flight.scss";

const Flight = ({ getFlights, flights }) => {
  let { slug } = useParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const initialDate = searchParams.get("date");
  const querySearch = searchParams.get("search");
  const typeFlightArr = [
    { name: "Departures", slug: "departure" },
    { name: "Arrivals", slug: "arrival" },
  ];

  useEffect(() => {
    getFlights(slug, initialDate, querySearch);
  }, [getFlights, slug, search]);

  const getTabBtnClasses = (typeFlight) =>
    typeFlight === slug ? "tab__button tab__button-active" : "tab__button";

  const prepareLink = (type) => `/${type}?${searchParams.toString()}`;

  return (
    <div className="tab">
      <div className="tab__head">
        {typeFlightArr.map((type) => {
          return (
            <Link
              key={type.slug}
              to={prepareLink(type.slug)}
              className={getTabBtnClasses(type.slug)}
            >
              {type.name}
            </Link>
          );
        })}
      </div>
      <div className="tab__content">
        {flights.length ? (
          <FlightTable flights={flights} />
        ) : (
          <div className="flight__empty">No flights</div>
        )}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    flights: getFlightsSelector(state),
  };
};

const mapDispatch = {
  getFlights: flightsActions.fetchFlights,
};

export default connect(mapState, mapDispatch)(Flight);
