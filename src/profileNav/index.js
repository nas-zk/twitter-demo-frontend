import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  StyledHeader,
  Avatar,
  StyledContainer,
  StyledNavLink,
  StyledListMenu,
  TwitterButton,
  StyledIcon,
  StyledList
} from "../styled";
import iconMore from "./icon-more.svg";

const ProfileImageBlock = styled.picture`
  width: 100%;
`;
const ProfileImage = styled.img`
  width: 100%;
`;

const ProfileAvatar = styled.img`
  border-radius: 100px;
  margin-top: -130px;
  position: absolute;
  border: 1px solid #e6ecf0;
`;

const NavLinkMenuCount = styled.span`
  font-size: 18px;
  margin: 0 auto;
  display: block;
  text-align: center;
  border-bottom: 2px solid #fff;

  ${StyledNavLink}:hover & {
    color: #1da1f2;
    box-sizing: border-box;
    border-bottom: 2px solid #1da1f2;
    transition: all 0.2s ease-in-out;
  }
  ${StyledNavLink}.active & {
    color: #1da1f2;
    box-sizing: border-box;
    border-bottom: 2px solid #1da1f2;
    transition: all 0.2s ease-in-out;
  }
`;

const MoreActionButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 5px;
`;

const ProfileNav = props => (
  <StyledHeader kind="profileNav">
    <div className="row">
      <ProfileImageBlock>
        <ProfileImage
          src={process.env.PUBLIC_URL + "/img/cover-image.jpg"}
          alt="profileImage"
        />
      </ProfileImageBlock>
    </div>
    <StyledContainer>
      <div className="row middle-md middle-lg start-md start-lg">
        <div className="col-md-3 col-lg-3">
          <ProfileAvatar
            src={process.env.PUBLIC_URL + "/img/ei-avatar.png"}
            alt="avatar"
          />
        </div>
        <div className="col-md-6 col-lg-6">
          <StyledList kind="profileNav">
            <div className="row">
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/everyinteract">
                  Tweet
                  <NavLinkMenuCount>8,058</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/everyinteract/Following">
                  Following
                  <NavLinkMenuCount>721</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/everyinteract/Followers">
                  Followers
                  <NavLinkMenuCount>1,815</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/everyinteract/Likes">
                  Likes
                  <NavLinkMenuCount>460</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/everyinteract/Lists">
                  Lists
                  <NavLinkMenuCount>2</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
            </div>
          </StyledList>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="row end-md end-lg">
            <TwitterButton kind="whiteTwitterButton" type="submit">
              Follow
            </TwitterButton>
            <MoreActionButton type="submit">
              <StyledIcon src={iconMore} alt="MoreButton" />
            </MoreActionButton>
          </div>
        </div>
      </div>
    </StyledContainer>
  </StyledHeader>
);

export default ProfileNav;
