import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { StyledIcon } from "../styled.js";
import iconTick from "./tick.svg";
import iconLocation from "./icon-location.svg";
import iconLink from "./icon-link.svg";
import iconJoined from "./icon-joined.svg";
import { format, compareAsc } from "date-fns";

const UserName = styled.h1``;
const UserNameAccount = styled.h2``;
const UserDescription = styled.p``;
const isAccountVerified = props => props.isAccountVerified;
const isUserFollowsYou = props => props.isUserFollowsYou;
const UserLocation = styled.div``;
const UserLink = styled.a``;
const UserJoined = styled.div``;

const UserInfo = props => (
  <div className="row">
    <UserName>
      {props.name}
      {props.isAccountVerified == "verified" && (
        <StyledIcon src={iconTick} alt="verified account" />
      )}
    </UserName>
    <UserNameAccount>
      {props.accountName}{" "}
      {props.isUserFollowsYou == "yes" && <span>Follows you</span>}
    </UserNameAccount>
    <UserDescription>{props.description}</UserDescription>
    <UserLocation>
      <StyledIcon src={iconLocation} alt="location icon" />
      {props.location}
    </UserLocation>
    <UserLink href={props.link}>
      <StyledIcon src={iconLink} alt="link icon" />
      {props.link}
    </UserLink>
    <UserJoined>
      <StyledIcon src={iconJoined} alt="joined icon" />{" "}
      {format(props.date, "[Joined] MMMM YYYY")}
    </UserJoined>
  </div>
);

export default UserInfo;
