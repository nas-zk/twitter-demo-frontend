import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Helmet from "react-helmet";
import GlobalNav from "./globalNav";
import ProfileNav from "./profileNav";
import ProfileSidebar from "./profileSidebar";
import TweetTimeline from "./profileTweetTimeline";
import SidebarCommonModules from "./sidebarCommonModules";
import { StyledMain, StyledContainer } from "./styled.js";

const App = props => (
  <BrowserRouter>
    <StyledMain>
      <Helmet>
        <title>Twitter Demo App</title>
        <meta name="description" content="Twitter Demo App" />
      </Helmet>
      <GlobalNav />
      <ProfileNav />
      <StyledContainer>
        <div className="row">
          <ProfileSidebar />
          <TweetTimeline />
          <SidebarCommonModules />
        </div>
      </StyledContainer>
    </StyledMain>
  </BrowserRouter>
);

export default App;
