import React, { Component } from "react";
import styled from "styled-components";
import { StyledList, StyledSpace } from "../styled.js";
import TrendsItem from "./TrendsList.js";
import { Link } from "react-router-dom";

const WhoToFollow = styled.section`
  background-color: #fff;
`;

const WhoToFollowUser = styled.div``;

const TrendsToFollow = styled.section`
  background-color: #fff;
`;

const SidebarCommonModules = props => (
  <div className="col-lg-3">
    <StyledSpace />
    <WhoToFollow>
      <div className="row">
        <WhoToFollowUser>VV</WhoToFollowUser>{" "}
      </div>
    </WhoToFollow>
    <StyledSpace />

    <TrendsToFollow>
      <div className="row">
        <StyledList>
          <TrendsItem trendLink="/" trendName="BringYourDogToWorkDay" />
          <TrendsItem
            trendLink="/"
            trendName="FridayFeeling"
            trendTweetCont="12.1K"
          />
        </StyledList>
      </div>
    </TrendsToFollow>
  </div>
);

export default SidebarCommonModules;
