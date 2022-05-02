const flightsEndpoint = "https://api.iev.aero/api/flights";

export const getFlights = async (date) => {
  try {
    const response = await fetch(`${flightsEndpoint}/${date}`);
    return response.json();
  } catch (error) {
    alert(error);
  }
};
