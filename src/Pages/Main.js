import React from "react";
import Movie from "./Movie";
import Tv from "./Tv";
import styled from "styled-components";
import Section from "../Components/Section";

const MainTitle = styled.div`
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const Main = () => {
  return (
    <Section>
      <MainTitle>Movie</MainTitle>
      <Movie />
      <MainTitle>Tv</MainTitle>
      <Tv />
    </Section>
  );
};

export default Main;
