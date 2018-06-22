import React, { Component } from "react";
import styled from "styled-components";
import iconFollowers from "./icon-followers.svg";
import { StyledIcon } from "../styled.js";

const followersCount = props => props.followersCount;

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
