import React from "react";
import FlightTableItem from "./FlightTableItem";

const FlightTable = ({ flights }) => {
  return (
    <table className="flight">
      <thead className="flight__thead">
        <tr>
          <th>Terminal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => {
          return <FlightTableItem key={flight.ID} flight={flight} />;
        })}
      </tbody>
    </table>
  );
};

export default FlightTable;
