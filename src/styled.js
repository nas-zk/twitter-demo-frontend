import React, { Component } from "react";
import styled from "styled-components";
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
`;

export const StyledSpace = styled.div`
  background-color: #14171a;
  margin-top: 10px;
`;

export const TwitterButton = styled.button``;

export const Avatar = styled.img``;

export const StyledListMenu = styled.li`
  list-style: none;
  align-self: baseline;
  padding: 0 14px 0 4px;
  font-weight: bold;
`;
export const StyledIcon = styled.img`
  margin-bottom: -3px;
  margin-right: 3px;

  ${props =>
    props.kind === "seacrhIcon" &&
    css`
      margin: 0px;
    `};
`;

export const StyledList = styled.ul`
  list-style: none;
  padding-right: 5px;
`;
export const StyledSidebar = styled.section``;
