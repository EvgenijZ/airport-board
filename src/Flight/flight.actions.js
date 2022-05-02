import { getFlights } from "./flight.gateway";
export const GET_FLIGHTS = "FLIGHTS/GET";

const onGetFlights = (data) => {
  return {
    type: GET_FLIGHTS,
    payload: data,
  };
};

export const fetchFlights = (type, date, query) => {
  return (dispatch) =>
    getFlights(date).then((flights) => {
      const filteredFlights = query
        ? flights.body[type].filter(
            (flight) =>
              flight.codeShareData[0].codeShare.toLowerCase() ===
                query.toLowerCase() && flight.airline.en.showOnSite === true
          )
        : flights.body[type].filter(
            (flight) => flight.airline.en.showOnSite === true
          );
      dispatch(onGetFlights(filteredFlights));
    });
};
