import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Helmet from "react-helmet";
import { Redirect } from "react-router";
import { StyledMain } from "./styled";
import ProfilePage from "./ProfilePage";

const App = props => (
  <BrowserRouter>
    <StyledMain>
      <Helmet>
        <title>Twitter Demo App</title>
        <meta name="description" content="Twitter Demo App" />
      </Helmet>
      <Redirect from="/" to="/everyinteract" />
      <Route path="/everyinteract" component={ProfilePage} />
    </StyledMain>
  </BrowserRouter>
);

export default App;
