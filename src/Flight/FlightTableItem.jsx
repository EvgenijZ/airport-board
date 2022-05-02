import React from "react";
import { useParams } from "react-router-dom";

const FlightTableItem = ({ flight }) => {
  let { slug } = useParams();

  const getFormatTime = (date) => {
    const formatDate = new Date(date);
    return `${formatDate.getHours().toString().padStart(2, "0")}:${formatDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const getFormatStatus = (status, date) =>
    status === "LN"
      ? `Landed ${getFormatTime(date)}`
      : `Departed at ${getFormatTime(date)}`;

  const formatTermClasses = (term) =>
    `${
      term === "A"
        ? "flight__term flight__term--green"
        : "flight__term flight__term--blue"
    }`;

  const getAirportName = (flight) => {
    return slug === "departure"
      ? flight["airportToID.name_en"]
      : flight["airportFromID.name_en"];
  };

  const { term, status, timeToStand, timeLandFact, airline, codeShareData } =
    flight;

  return (
    <tr className="flight__item">
      <td>
        <span className={formatTermClasses(term)}>{term}</span>
      </td>
      <td>{getFormatTime(timeToStand)}</td>
      <td>{getAirportName(flight)}</td>
      <td>{getFormatStatus(status, timeLandFact)}</td>
      <td>
        <div className="flight__wrap">
          <img
            className="flight__logo"
            src={airline.en.logoSmallName}
            alt={airline.en.name}
          />
          <p>{airline.en.name}</p>
        </div>
      </td>
      <td>{codeShareData[0].codeShare}</td>
    </tr>
  );
};

export default FlightTableItem;
