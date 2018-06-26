import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledMain = styled.main`
  background-color: #e6ecf0;
  font-family: "Helvetica Neue", "Lato", Arial, san-serif;
  color: #14171a;
  font-size: 14px;
  line-height: 20px;
  margin: 0 auto;
`;

export const StyledNavLink = styled(NavLink)`
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
  ${props =>
    props.kind === "tweetTab" &&
    css`
      color: #1da1f2;
      font-size: 18px;
      font-weight: bold;

      &.active {
        color: #292f33;
      }
    `};
`;

export const StyledContainer = styled.div`
  max-width: 890px;
  margin: 0 auto;
  padding: 0 auto;

  @media (min-width: 1236px) {
    max-width: 1190px;
  }
`;

export const StyledHeader = styled.header`
  background-color: #fff;
  padding: 3px 0 3px 0;

  ${props =>
    props.kind === "profileNav" &&
    css`
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
      padding-bottom: 0;
    `};
`;

export const StyledSpace = styled.div`
  background-color: #14171a;
  margin-top: 10px;
`;

export const TwitterButton = styled.button`
  background-color: #1da1f2;
  color: #fff;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  font-weight: bold;
  line-height: 20px;
  padding: 4px 16px;
  cursor: pointer;

  ${props =>
    props.kind === "whiteTwitterButton" &&
    css`
      background-color: #fff;
      color: #1da1f2;
    `};
  ${props =>
    props.kind === "sidebar" &&
    css`
      width: 100%;
    `};
`;

export const Avatar = styled.img`
  border-radius: 100px;

  ${props =>
    props.kind === "userprofile" &&
    css`
      border-radius: 0px;
      margin: 5px 0 0 5px;
    `};
`;

export const StyledIcon = styled.img`
  margin-right: 3px;
  margin-left: 3px;

  ${props =>
    props.kind === "seacrhIcon" &&
    css`
      margin: 0px;
      align-self: baseline;
    `};

  ${props =>
    props.kind === "sidebar" &&
    css`
      padding-right: 6px;
    `};
  ${props =>
    props.kind === "delete" &&
    css`
      margin: 0;
    `};
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  margin: 0;
  ${props =>
    props.kind === "profileNav" &&
    css`
      margin-left: 10px;
      align-self: baseline;
    `};
`;

export const StyledListMenu = styled.li`
  list-style: none;
  align-self: baseline;
  padding: 0 14px 0 4px;
  font-weight: bold;
  ${props =>
    props.kind === "tweetTab" &&
    css`
      padding: 15px 23px 12px;
    `};

  ${props =>
    props.kind === "profileNav" &&
    css`
      margin: 0 10px 0 10px;
    `};
`;

export const StyledSidebar = styled.section``;
