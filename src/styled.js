import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledMain = styled.main`
  background-color: #e6ecf0;
  font-family: "Helvetica Neue", Arial, san-serif;
  color: #14171a;
  font-size: 14px;
  line-height: 20px;
  margin: 0 auto;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #667580;
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

  ${props =>
    props.kind === "profileNav" &&
    css`
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
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
`;

export const Avatar = styled.img`
  border-radius: 100px;
`;

export const StyledListMenu = styled.li`
  list-style: none;
  align-self: baseline;
  padding: 0 14px 0 4px;
  font-weight: bold;

  ${props =>
    props.kind === "profileNav" &&
    css`
      box-sizing: border-box;
      font-size: 12px;
      padding: 5px;
      align-self: middle;
    `};
`;
export const StyledIcon = styled.img`
  margin-bottom: -3px;
  margin-right: 3px;

  ${props =>
    props.kind === "seacrhIcon" &&
    css`
      margin-bottom: 0px;
      margin-right: 0px;
      align-self: baseline;
    `};
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  margin: 0;
`;
export const StyledSidebar = styled.section``;
