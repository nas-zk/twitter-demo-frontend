import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import iconBird from "./icon-bird.svg";
import iconHome from "./icon-home.svg";
import iconMagnifier from "./icon-magnifier.svg";
import iconMessages from "./icon-messages.svg";
import iconNotifications from "./icon-notifications.svg";
import iconMoments from "./icon-moments.svg";
import {
  StyledNavLink,
  StyledContainer,
  TwitterButton,
  Avatar,
  StyledHeader,
  StyledListMenu,
  StyledIcon,
  StyledList
} from "../styled.js";

const SearchBox = styled.form`
  background-color: #f5f8fa;
  border: 1px #e6ecf0;
  border-radius: 100px;
  width: 100%;
  height: 33px;
`;

const SearchBoxInput = styled.input`
  outline: none;
  background-color: #f5f8fa;
  width: 100%;
  height: 32px;
  border-radius: 21px;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  font-size: 12px;
  padding-left: 8px;
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
                <StyledIcon
                  kind="searchIcon"
                  src={iconMagnifier}
                  alt="Magnifier"
                />
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
