import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const StyledContainer = styled.div`
  max-width: 890px;
  margin: auto 0;
  padding: auto 0;

  @media (min-width: 1236px) {
    max-width: 1190px;
  }
`;

export const StyledHeader = styled.header`
  background-color: #fff;
`;

export const TwitterButton = styled.button``;

export const Avatar = styled.img``;

export const StyledListMenu = styled.li`
  align-self: center;
`;
export const StyledIcon = styled.img`
  margin: 5px;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
`;
