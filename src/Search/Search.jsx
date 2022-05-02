import React, { useState, useEffect } from "react";
import "./search.scss";
import { useParams, useHistory, useLocation } from "react-router-dom";

const Search = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const initialDate = searchParams.get("date") || "02-01-2021";
  const [query, setQuery] = useState(searchParams.get("search") || "");
  let { slug } = useParams();
  const history = useHistory();

  const prepareSearch = (e) => {
    e.preventDefault();
    history.push({
      pathname: slug ? slug : "departure",
      search: query
        ? `date=${initialDate}&search=${query}`
        : `date=${initialDate}`,
    });
  };

  useEffect(() => {
    if (!searchParams.get("search")) setQuery("");
  }, [slug]);

  return (
    <div className="search">
      <form className="search__form" onSubmit={(e) => prepareSearch(e)}>
        <input
          className="search__input"
          type="text"
          autoComplete="off"
          placeholder="Airline, destinaton or flight #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
