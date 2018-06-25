import React, { Component } from "react";
import Helmet from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import GlobalNav from "./globalNav";
import ProfileNav from "./profileNav";
import ProfileSidebar from "./profileSidebar";
import TweetTimeline from "./profileTweetTimeline";
import TrendsAndToFollow from "./sidebarTrendsAndToFollow";
import { StyledMain, StyledContainer } from "./styled.js";

const ProfilePage = () => (
  <BrowserRouter>
    <StyledMain>
      <Helmet>
        <title>Every Interaction</title>
        <meta name="description" content="Every Interaction" />
      </Helmet>
      <GlobalNav />
      <ProfileNav />
      <StyledContainer>
        <div className="row">
          <ProfileSidebar />
          <TweetTimeline />
          <TrendsAndToFollow />
        </div>
      </StyledContainer>
    </StyledMain>
  </BrowserRouter>
);

export default ProfilePage;
