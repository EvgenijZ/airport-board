import { GET_FLIGHTS } from "./flight.actions";

const initialState = {
  flightsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHTS:
      return {
        ...state,
        flightsList: action.payload,
      };
    default:
      return state;
  }
};
