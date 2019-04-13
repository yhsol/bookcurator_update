import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const SHeader = styled.div``;

const HeaderTitle = styled.div``;

const HeaderList = styled.ul``;

const HeaderItem = styled.li``;

const SLink = styled(Link)``;

const Header = () => {
  return (
    <SHeader>
      <HeaderTitle>
        <SLink to="/">Header Title</SLink>
      </HeaderTitle>
      <HeaderList>
        <HeaderItem>
          <SLink to="/movie">Movie</SLink>
        </HeaderItem>
        <HeaderItem>
          <SLink to="/tv">Tv</SLink>
        </HeaderItem>
        <HeaderItem>
          <SLink to="/search">Search</SLink>
        </HeaderItem>
      </HeaderList>
    </SHeader>
  );
};

export default withRouter(Header);
