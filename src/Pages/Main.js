import React from "react";
import Movie from "./Movie";
import Tv from "./Tv";
import styled from "styled-components";

const MainTitle = styled.div`
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const Main = () => {
  return (
    <>
      <MainTitle>Movie</MainTitle>
      <Movie />
      <MainTitle>Tv</MainTitle>
      <Tv />
    </>
  );
};

export default Main;
