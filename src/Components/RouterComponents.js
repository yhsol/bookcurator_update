import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Movie from "../Pages/Movie";
import Tv from "../Pages/Tv";
import Search from "../Pages/Search";
import Detail from "../Pages/Detail";
import Header from "./Header";
import Main from "../Pages/Main";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/tv" exact component={Tv} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/tv/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
