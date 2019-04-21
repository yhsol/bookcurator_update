import React, { useState, useEffect } from "react";
import { movieApi } from "../Api";
import Section from "../Components/Section";

const Movie = () => {
  const [popular, setPopular] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function popularData() {
        const {
          data: { results: popular }
        } = await movieApi.popular();
        setPopular(popular);
        // console.log(popular);
      }
      popularData();

      const upcomingData = async () => {
        const {
          data: { results: upcoming }
        } = await movieApi.upcoming();
        setUpcoming(upcoming);
        // console.log(upcoming);
      };
      upcomingData();

      const nowPlayingData = async () => {
        const {
          data: { results: nowPlaying }
        } = await movieApi.nowPlaying();
        setNowPlaying(nowPlaying);
        // console.log(nowPlaying);
      };
      nowPlayingData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <Section>
          <h2>POPULAR</h2>
          <div>
            {popular &&
              popular.length > 0 &&
              popular.map(movie => <div key={movie.id}>{movie.title}</div>)}
          </div>
          <h2>NOW PLAYING</h2>
          <div>
            {nowPlaying &&
              nowPlaying.length > 0 &&
              nowPlaying.map(movie => <div key={movie.id}>{movie.title}</div>)}
          </div>
          <h2>UPCOMING</h2>
          <div>
            {upcoming &&
              upcoming.length > 0 &&
              upcoming.map(movie => <div key={movie.id}>{movie.title}</div>)}
          </div>
          <div>{error && error}</div>
        </Section>
      )}
    </>
  );
};

export default Movie;
