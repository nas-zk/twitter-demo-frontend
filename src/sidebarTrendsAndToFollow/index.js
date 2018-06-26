import React, { Component } from "react";
import styled, { css } from "styled-components";
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
`;

const StyledSidebarLink = styled(Link)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 12px;
  align-self: baseline;
`;

const TrendsToFollowHeader = styled.header`
  padding: 5px 8px 0 14px;
`;

const StyledTitle = styled.h3`
  font-size: 17px;
  font-weight: bold;
  margin-top: 0px;
  align-self: baseline;
`;

const UpdateButton = styled.button`
  background-color: #fff;
  border: none;
  color: #1da1f2;
  font-size: 12px;
  align-self: baseline;
  cursor: pointer;
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

const StyledSpace = styled.div`
  background-color: #14171a;
  margin-top: 10px;
`;

const StyledIcon = styled.img`
  margin-right: 3px;
  margin-left: 3px;

  ${props =>
    props.kind === "delete" &&
    css`
      margin: 0;
    `};
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  margin: 0;
`;

const TrendsAndToFollow = props => (
  <div className="col-lg-3">
    <StyledSpace />
    <WhoToFollow>
      <WhoToFollowHeader>
        <div className="row around-md around-lg">
          <StyledTitle>Who to Follow</StyledTitle> {" · "}
          <UpdateButton type="button">Refresh</UpdateButton>
          {" · "} <StyledSidebarLink to="/view all">View all</StyledSidebarLink>
        </div>
      </WhoToFollowHeader>
      <WhoToFollowUser
        userAvatar={process.env.PUBLIC_URL + "./img/toFollow/avatar1.png"}
        name="AppleInsider"
        isAccountVerified={false}
        accountName="appleinsider"
      />
      <StyledBreaker />
      <WhoToFollowUser
        userAvatar={process.env.PUBLIC_URL + "./img/toFollow/avatar2.png"}
        name="Creode"
        isAccountVerified={true}
        accountName="Creode"
      />
      <StyledBreaker />
      <WhoToFollowUser
        userAvatar={process.env.PUBLIC_URL + "./img/toFollow/avatar3.png"}
        name="Epiphany Search"
        isAccountVerified={false}
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
          <StyledTitle>United Kingdom Trends</StyledTitle> {" · "}
          <UpdateButton type="button">Change</UpdateButton>
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

export default TrendsAndToFollow;
