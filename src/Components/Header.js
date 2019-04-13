import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const SHeader = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 64px;
`;

const HeaderTitle = styled.div`
  font-size: 1.7rem;
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const HeaderItem = styled.li`
  padding: 0 1rem;
  :hover {
    color: #079992;
  }
  color: ${props => (props.current ? "#079992" : "")};
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <SHeader>
      {/* {console.log(pathname)}; */}
      <HeaderTitle>
        <SLink to="/">Header Title</SLink>
      </HeaderTitle>
      <HeaderList>
        <HeaderItem current={pathname === "/movie"}>
          <SLink to="/movie">Movie</SLink>
        </HeaderItem>
        <HeaderItem current={pathname === "/tv"}>
          <SLink to="/tv">Tv</SLink>
        </HeaderItem>
        <HeaderItem current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </HeaderItem>
      </HeaderList>
    </SHeader>
  );
};

export default withRouter(Header);
