import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { StyledHeader } from "../styled.js";
import { StyledContainer } from "../styled.js";
import { StyledNavLink } from "../styled.js";
import { StyledListMenu } from "../styled.js";
import { TwitterButton } from "../styled.js";
import iconMore from "./icon-more.svg";
import { StyledIcon } from "../styled.js";
import { StyledList } from "../styled.js";
import { Avatar } from "../styled.js";

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
                <StyledNavLink to="/">
                  Tweet
                  <NavLinkMenuCount>8,058</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/">
                  Following
                  <NavLinkMenuCount>721</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/">
                  Followers
                  <NavLinkMenuCount>1,815</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/">
                  Likes
                  <NavLinkMenuCount>460</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/">
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
