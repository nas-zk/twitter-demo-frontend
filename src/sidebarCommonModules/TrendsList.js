import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TrendLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: #b2bbc2;
`;

const TrendsListItem = styled.li`
  list-style: none;
  padding: 5px 0 5px 0;
`;
const TrendLinkHastag = styled.span`
  color: #1da1f2;
  font-weight: bold;
  font-size: 15px;
`;

const TrendsItem = props => (
  <TrendsListItem>
    <TrendLink to={props.trendLink}>
      <TrendLinkHastag>{props.trendName}</TrendLinkHastag>
      {props.trendTweetCount && (
        <span>
          <br />
          {props.trendTweetCount} Tweets
        </span>
      )}
    </TrendLink>
  </TrendsListItem>
);

export default TrendsItem;
