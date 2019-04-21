import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../Api";

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

  const fetchData = async () => {
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
    fetchData();
  }, []);

  console.log(result);

  return <div>{result.name}</div>;
};

export default Detail;
