import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TrendLink = styled(Link)``;

const TrendsListItem = styled.li``;
const TrendLinkHastag = styled.span``;

const TrendsItem = props => (
  <TrendsListItem>
    <TrendLink to={props.trendLink}>
      <TrendLinkHastag>#{props.trendName}</TrendLinkHastag>
      {props.trendTweetCont && (
        <span>
          <br />
          {props.trendTweetCont} Tweets
        </span>
      )}
    </TrendLink>
  </TrendsListItem>
);

export default TrendsItem;
