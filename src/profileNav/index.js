import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import iconMore from "./icon-more.svg";

const StyledListMenu = styled.li`
  list-style: none;
  align-self: baseline;
  padding: 0 14px 0 4px;
  font-weight: bold;
  margin: 0 10px 0 10px;
`;

const TwitterButton = styled.button`
  border: 1px solid #1da1f2;
  border-radius: 100px;
  font-weight: bold;
  line-height: 20px;
  padding: 4px 16px;
  cursor: pointer;
  background-color: #fff;
  color: #1da1f2;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  margin: 0 0 0 10px;
  align-self: baseline;
`;

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 3px 0 3px 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
`;

const Avatar = styled.img`
  border-radius: 100px;
`;

const StyledIcon = styled.img`
  margin-right: 3px;
  margin-left: 3px;
`;

const StyledContainer = styled.div`
  max-width: 890px;
  margin: 0 auto;
  padding: 0 auto;

  @media (min-width: 1236px) {
    max-width: 1190px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #667580;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid #fff;

  ${StyledListMenu}:hover & {
    color: #1da1f2;
    box-sizing: border-box;
    border-bottom: 2px solid #1da1f2;
  }

  ${StyledNavLink}:active & {
    color: #1da1f2;
  }
`;

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
  <StyledHeader>
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
          <StyledList>
            <div className="row">
              <StyledListMenu>
                <StyledNavLink to="/everyinteract">
                  Tweet
                  <NavLinkMenuCount>8,058</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/everyinteract/Following">
                  Following
                  <NavLinkMenuCount>721</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/everyinteract/Followers">
                  Followers
                  <NavLinkMenuCount>1,815</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/everyinteract/Likes">
                  Likes
                  <NavLinkMenuCount>460</NavLinkMenuCount>
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
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
            <TwitterButton type="submit">Follow</TwitterButton>
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
