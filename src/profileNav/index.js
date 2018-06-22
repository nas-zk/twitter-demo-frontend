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
  margin-top: -120px;
  position: absolute;
`;

const NavLinkMenuCount = styled.span`
  font-size: 18px;
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
      <div className="row middle-md middle-lg">
        <div className="col-md-3 col-lg-3">
          <ProfileAvatar
            src={process.env.PUBLIC_URL + "/img/ei-avatar.png"}
            alt="avatar"
          />
        </div>
        <div className="col-md-6 col-lg-6">
          <StyledList>
            <div className="row">
              <StyledListMenu kind="profileNav">
                <StyledNavLink to="/">
                  Tweet
                  <NavLinkMenuCount>
                    <br />8,058
                  </NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/">
                  Following
                  <span>
                    <br />721
                  </span>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/">
                  Followers
                  <span>
                    <br />1,815
                  </span>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/">
                  Likes
                  <span>
                    <br />460
                  </span>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/">
                  Lists
                  <span>
                    <br />2
                  </span>
                </StyledNavLink>
              </StyledListMenu>
            </div>
          </StyledList>
        </div>
        <div className="col-md-3 col-lg-3">
          <TwitterButton kind="whiteTwitterButton" type="submit">
            Follow
          </TwitterButton>
          <button>
            <StyledIcon src={iconMore} alt="MoreButton" />
          </button>
        </div>
      </div>
    </StyledContainer>
  </StyledHeader>
);

export default ProfileNav;
