import React, { useState, useEffect } from "react";
import { tvApi } from "../Api";
import Section from "../Components/Section";
import { Link } from "react-router-dom";

const Movie = () => {
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function popularData() {
        const {
          data: { results: popular }
        } = await tvApi.popular();
        setPopular(popular);
        // console.log(popular);
      }
      popularData();

      const airingTodayData = async () => {
        const {
          data: { results: airingToday }
        } = await tvApi.airingToday();
        setAiringToday(airingToday);
        // console.log(airingToday);
      };
      airingTodayData();

      const topRatedData = async () => {
        const {
          data: { results: topRated }
        } = await tvApi.topRated();
        setTopRated(topRated);
        // console.log(topRated);
      };
      topRatedData();
    } catch (error) {
      // console.error(error);
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
              popular.map(tv => (
                <div key={tv.id}>
                  <Link to={`tv/${tv.id}`}>{tv.name}</Link>
                </div>
              ))}
          </div>
          <h2>NOW PLAYING</h2>
          <div>
            {airingToday &&
              airingToday.length > 0 &&
              airingToday.map(tv => (
                <div key={tv.id}>
                  <Link to={`tv/${tv.id}`}>{tv.name}</Link>
                </div>
              ))}
          </div>
          <h2>UPCOMING</h2>
          <div>
            {topRated &&
              topRated.length > 0 &&
              topRated.map(tv => (
                <div key={tv.id}>
                  <Link to={`tv/${tv.id}`}>{tv.name}</Link>
                </div>
              ))}
          </div>
          <div>{error && error}</div>
        </Section>
      )}
    </>
  );
};

export default Movie;
