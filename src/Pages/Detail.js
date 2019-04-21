import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../Api";
import Section from "../Components/Section";

const Detail = props => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    match: {
      params: { id }
    },
    location: { pathname }
  } = props;
  const parsedID = parseInt(id);
  const isMovie = pathname.includes("/movie/");

  const useFetchData = async () => {
    try {
      if (isMovie) {
        const { data: result } = await movieApi.movieDetail(parsedID);
        setResult(result);
        console.log(result);
      } else {
        const { data: result } = await tvApi.tvDetail(parsedID);
        setResult(result);
        console.log(result);
      }
    } catch (error) {
      setError("Can't find infomation");
    } finally {
      setLoading(false);
      console.log(result);
    }
  };

  useEffect(() => {
    useFetchData();
  }, []);

  console.log(result);

  return (
    <Section>
      {loading && <span>loading...</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && result && isMovie ? result.title : result.name}
    </Section>
  );
};

export default Detail;
