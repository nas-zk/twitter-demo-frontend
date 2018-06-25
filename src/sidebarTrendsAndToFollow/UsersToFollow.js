import React, { Component } from "react";
import styled from "styled-components";
import { Avatar, TwitterButton, StyledIcon } from "../styled.js";
import iconDelete from "./icon-delete.svg";
import iconTick from "./tick.svg";

const WhoToFollowUserBlock = styled.div`
  padding: 3px 8px 0 12px;
`;
const UserPreviewInfo = styled.div`
  padding-left: 15px;
`;

const UserName = styled.span`
  font-weight: bold;
  color: #292f33;
  padding-right: 3px;
  padding-bottom: 3px;
`;
const UserNameAccount = styled.span`
  padding-right: 3px;
  padding-bottom: 3px;
  color: #707e88;
  font-size: 13px;
`;
const isAccountVerified = props => props.isAccountVerified;

const WhoToFollowUser = props => (
  <WhoToFollowUserBlock>
    <div className="row">
      <div className="col-md-2 col-lg-2">
        <Avatar src={props.userAvatar} alt={props.userAvatar} />
      </div>
      <div className="col-md-8 col-lg-8">
        <UserPreviewInfo>
          <UserName>{props.name}</UserName>
          {props.isAccountVerified == "verified" && (
            <StyledIcon src={iconTick} alt="verified account" />
          )}
          <UserNameAccount>@{props.accountName}</UserNameAccount>
          <TwitterButton kind="whiteTwitterButton" type="submit">
            Follow
          </TwitterButton>
        </UserPreviewInfo>
      </div>
      <div className="col-md-2 col-lg-2 top-md top-lg end-md end-lg">
        <StyledIcon kind="delete" src={iconDelete} alt="Delete Icon" />
      </div>
    </div>
  </WhoToFollowUserBlock>
);

export default WhoToFollowUser;
