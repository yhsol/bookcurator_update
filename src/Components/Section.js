import React from "react";
import styled from "styled-components";

const SectionStyles = styled.div`
  width: 60vw;
  margin: 2rem auto;
`;

const Section = ({ children }) => {
  return <SectionStyles>{children}</SectionStyles>;
};

export default Section;
