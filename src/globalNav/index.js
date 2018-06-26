import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import iconBird from "./icon-bird.svg";
import iconHome from "./icon-home.svg";
import iconMagnifier from "./icon-magnifier.svg";
import iconMessages from "./icon-messages.svg";
import iconNotifications from "./icon-notifications.svg";
import iconMoments from "./icon-moments.svg";

const Avatar = styled.img`
  border-radius: 100px;
`;

const StyledIcon = styled.img`
  margin-right: 3px;
  margin-left: 3px;

  ${props =>
    props.kind === "magnifierIcon" &&
    css`
      margin: 0px;
      align-self: baseline;
    `};
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  margin: 0;
`;

const StyledListMenu = styled.li`
  list-style: none;
  align-self: baseline;
  padding: 0 14px 0 4px;
  font-weight: bold;
`;

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 3px 0 3px 0;
`;

const TwitterButton = styled.button`
  background-color: #1da1f2;
  color: #fff;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  font-weight: bold;
  line-height: 20px;
  padding: 4px 16px;
  cursor: pointer;
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

const SearchBox = styled.form`
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
  width: 100%;
  height: 33px;
  box-sizing: border-box;
  border-left: none;
  display: flex;
  justify-content: space-between;
`;

const SearchBoxInput = styled.input`
  outline: none;
  background-color: #f5f8fa;
  width: 80%;
  height: 32px;
  border-radius: 21px;
  border: 1px solid #f5f8fa;
  border-left: none;
  box-sizing: border-box;
  font-size: 12px;
  padding-left: 8px;
`;

const SearchButton = styled.button`
  border: none;
  background-color: #f5f8fa;
  cursor: pointer;
  width: 20%;
  border-radius: 100px;
`;

const GlobalNav = props => (
  <StyledHeader>
    <StyledContainer>
      <div className="row middle-md middle-lg center-md center-lg between-md between-lg">
        <div className="col-md-5 col-lg-5">
          <StyledList>
            <div className="row">
              <StyledListMenu>
                <StyledNavLink to="/">
                  <StyledIcon src={iconHome} alt="home" />Home
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/">
                  <StyledIcon src={iconMoments} alt="Moments" />Moments
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/">
                  <StyledIcon src={iconNotifications} alt="Notifications" />Notifications
                </StyledNavLink>
              </StyledListMenu>
              <StyledListMenu>
                <StyledNavLink to="/">
                  <StyledIcon src={iconMessages} alt="Messages" />Messages
                </StyledNavLink>
              </StyledListMenu>
            </div>
          </StyledList>
        </div>
        <div className="col-md-4 col-lg-4">
          <StyledIcon src={iconBird} alt="Twitter Logo Bird" />
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="row middle-md end-lg end-lg">
            <div className="col-md-6 col-lg-6">
              <SearchBox action="/search">
                <SearchBoxInput
                  type="search"
                  placeholder="Search Twitter"
                  name="Search Twitter"
                />
                <SearchButton type="submit">
                  <StyledIcon
                    kind="magnifierIcon"
                    src={iconMagnifier}
                    alt="Magnifier"
                  />
                </SearchButton>
              </SearchBox>
            </div>
            <div className="col-md-2 col-lg-2">
              <Avatar
                src={process.env.PUBLIC_URL + "/img/avatar.png"}
                alt="avatar"
              />
            </div>
            <div className="col-md-4 col-lg-4">
              <TwitterButton type="submit">Tweet</TwitterButton>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  </StyledHeader>
);
export default GlobalNav;
