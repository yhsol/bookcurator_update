import React, { useState } from "react";
import { movieApi, tvApi } from "../Api";
import Section from "../Components/Section";
import { Link } from "react-router-dom";

const Search = term => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResutls] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleONSubmit = event => {
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm();
    }
    setSearchTerm("");
  };

  const handleOnChange = event => {
    const {
      target: { value }
    } = event;
    setSearchTerm(value);
  };

  const searchByTerm = async () => {
    setLoading(true);

    try {
      const movieSearch = async () => {
        const {
          data: { results: movieResults }
        } = await movieApi.search(searchTerm);
        setMovieResults(movieResults);
      };
      movieSearch();

      const tvSearch = async () => {
        const {
          data: { results: tvResults }
        } = await tvApi.search(searchTerm);
        setTvResutls(tvResults);
      };
      tvSearch();

      throw Error();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation");
    } finally {
      setLoading(false);
    }

    return;
  };

  return (
    <>
      {loading ? (
        ""
      ) : (
        <Section>
          <form onSubmit={handleONSubmit}>
            <input
              value={searchTerm}
              onChange={handleOnChange}
              placeholder="Search Movie or Tv Show!"
            />
          </form>
          <div>
            {movieResults && movieResults.length > 0 && (
              <div>
                {movieResults.map(movie => (
                  <div key={movie.id}>
                    <Link to={`movie/${movie.id}`}>{movie.title}</Link>
                  </div>
                ))}
              </div>
            )}
            {tvResults && tvResults.length > 0 && (
              <div>
                {tvResults.map(tvShow => (
                  <div key={tvShow.id}>
                    <Link to={`tv/${tvShow.id}`}>{tvShow.title}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>{error && error}</div>
        </Section>
      )}
    </>
  );
};

export default Search;
