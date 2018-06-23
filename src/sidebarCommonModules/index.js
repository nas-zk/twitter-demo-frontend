import React, { Component } from "react";
import styled from "styled-components";
import { StyledList, StyledSpace, StyledLink, StyledIcon } from "../styled.js";
import TrendsItem from "./TrendsList";
import { Link } from "react-router-dom";
import WhoToFollowUser from "./UsersToFollow";
import iconPeople from "./icon-people.svg";

const WhoToFollow = styled.section`
  background-color: #fff;
  padding: 10px 8px 25px 14px;
`;
const WhoToFollowHeader = styled.header`
  padding: 5px 8px 0 14px;

  h3 {
    font-size: 17px;
    font-weight: bold;
    margin-top: 0px;
    align-self: baseline;
  }

  button {
    background-color: #fff;
    border: none;
    color: #1da1f2;
    font-size: 12px;
    align-self: baseline;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #1da1f2;
    font-size: 12px;
    align-self: baseline;
  }
`;

const TrendsToFollowHeader = styled.header`
  padding: 5px 8px 0 14px;

  h3 {
    font-size: 17px;
    font-weight: bold;
    margin: 0px;
    align-self: baseline;
  }

  button {
    background-color: #fff;
    border: none;
    color: #1da1f2;
    font-size: 12px;
    align-self: baseline;
    cursor: pointer;
  }
`;

const StyledBreaker = styled.hr`
  width: 90%;
  align-self: center;
  color: #e6ecf0;
  weight: 1px;
`;
const TrendsToFollow = styled.section`
  background-color: #fff;
`;

const FollowMoreLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  color: #1da1f2;
  margin: 5px 8px 25px 14px;
`;

const GlobalFooter = styled.footer`
  color: #718290;
  font-size: 13px;
`;
const SidebarCommonModules = props => (
  <div className="col-lg-3">
    <StyledSpace />
    <WhoToFollow>
      <WhoToFollowHeader>
        <div className="row around-md around-lg">
          <h3>Who to Follow</h3> {" · "}
          <button type="button">Refresh</button>
          {" · "} <Link to="/view all">View all</Link>
        </div>
      </WhoToFollowHeader>
      <WhoToFollowUser
        userAvatar={process.env.PUBLIC_URL + "./img/toFollow/avatar1.png"}
        name="AppleInsider"
        isAccountVerified="not-verified"
        accountName="appleinsider"
      />
      <StyledBreaker />
      <WhoToFollowUser
        userAvatar={process.env.PUBLIC_URL + "./img/toFollow/avatar2.png"}
        name="Creode"
        isAccountVerified="verified"
        accountName="Creode"
      />
      <StyledBreaker />
      <WhoToFollowUser
        userAvatar={process.env.PUBLIC_URL + "./img/toFollow/avatar3.png"}
        name="Epiphany Search"
        isAccountVerified="not-verified"
        accountName="Epiph…"
      />
      <StyledBreaker />
      <div>
        <FollowMoreLink to="/">
          <StyledIcon src={iconPeople} alt="icon People" />Find people to Follow
        </FollowMoreLink>
      </div>
    </WhoToFollow>
    <StyledSpace />

    <TrendsToFollow>
      <TrendsToFollowHeader>
        <div className="row around-md around-lg ">
          <h3>United Kingdom Trends</h3> {" · "}
          <button type="button">Change</button>
        </div>
      </TrendsToFollowHeader>
      <ul>
        <TrendsItem trendLink="/" trendName="BringYourDogToWorkDay" />
        <TrendsItem
          trendLink="/"
          trendName="#FridayFeeling"
          trendTweetCount="12.1K"
        />
        <TrendsItem
          trendLink="/"
          trendName="#BrexitAnniversary"
          trendTweetCount="12.1K"
        />
        <TrendsItem
          trendLink="/"
          trendName="HMS Queen Elizabeth"
          trendTweetCount={1036}
        />
        <TrendsItem
          trendLink="/"
          trendName="Joe Budden"
          trendTweetCount={1036}
        />
        <TrendsItem trendLink="/" trendName="Trident" trendTweetCount="6,136" />
      </ul>
    </TrendsToFollow>
    <GlobalFooter>
      <p>
        © 2018 Twitter About Help Center Terms Privacy policy Cookies Ads info
      </p>
    </GlobalFooter>
  </div>
);

export default SidebarCommonModules;
