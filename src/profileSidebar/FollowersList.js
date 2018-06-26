import React, { Component } from "react";
import styled from "styled-components";
import iconFollowers from "./icon-followers.svg";

const followersCount = props => props.followersCount;

const StyledIcon = styled.img`
  margin-right: 3px;
  margin-left: 3px;
`;

const FollowersList = props => (
  <div>
    {props.followersCount > 0 && (
      <p>
        <StyledIcon src={iconFollowers} alt="icon followers" />{" "}
        {props.followersCount} Followers you know
      </p>
    )}
  </div>
);
export default FollowersList;
