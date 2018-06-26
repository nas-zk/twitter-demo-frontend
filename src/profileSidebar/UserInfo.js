import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import iconTick from "./tick.svg";
import iconLocation from "./icon-location.svg";
import iconLink from "./icon-link.svg";
import iconJoined from "./icon-joined.svg";
import { format, compareAsc } from "date-fns";

const UserName = styled.h1`
  font-size: 22px;
  margin: 0;
  padding: 25px 5px 0 0;
`;
const UserNameAccount = styled.h2`
  font-size: 14px;
  color: #697787;
  font-weight: normal;
  margin: 0;
  padding: 5px 5px 0 0;
`;

const FollowCheck = styled.span`
  font-size: 12px;
  padding-left: 3px;
`;

const StyledIcon = styled.img`
  margin-right: 3px;
  margin-left: 3px;
  padding-right: 6px;
`;

const UserDescription = styled.p`
  color: #14171a;
  font-size: 14px;
`;
const isAccountVerified = props => props.isAccountVerified;
const isUserFollowsYou = props => props.isUserFollowsYou;
const UserLocation = styled.div`
  margin-bottom: 8px;
`;
const UserLinkInfo = styled.div`
  margin-bottom: 8px;
`;
const UserLinkExternal = styled.a`
  text-decoration: none;
  color: #1da1f2;
`;

const UserJoined = styled.div`
  margin-bottom: 8px;
`;

const UserInfo = props => (
  <div>
    <UserName>
      {props.name}
      {props.isAccountVerified && (
        <StyledIcon src={iconTick} alt="verified account" />
      )}
    </UserName>
    <UserNameAccount>
      {props.accountName}
      {props.isUserFollowsYou == "yes" && (
        <FollowCheck>Follows you</FollowCheck>
      )}
    </UserNameAccount>
    <UserDescription>{props.description}</UserDescription>
    <UserLocation>
      <StyledIcon src={iconLocation} alt="location icon" />
      {props.location}
    </UserLocation>
    <UserLinkInfo>
      <UserLinkExternal href={props.link}>
        <StyledIcon src={iconLink} alt="link icon" />
        {props.link}
      </UserLinkExternal>
    </UserLinkInfo>
    <UserJoined>
      <StyledIcon src={iconJoined} alt="joined icon" />
      {format(props.date, "[Joined] MMMM YYYY")}
    </UserJoined>
  </div>
);

export default UserInfo;
