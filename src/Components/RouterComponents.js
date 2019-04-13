import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../Pages/Main";
import Movie from "../Pages/Movie";
import Tv from "../Pages/Tv";
import Search from "../Pages/Search";
import Detail from "../Pages/Detail";
import Header from "./Header";

const RouterComponents = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/movie" component={Movie} />
      <Route path="/tv" component={Tv} />
      <Route path="/search" component={Search} />
      <Route path="/detail/:id" component={Detail} />
    </Router>
  );
};

export default RouterComponents;
