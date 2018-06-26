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

export const StyledContainer = styled.div`
  max-width: 890px;
  margin: 0 auto;
  padding: 0 auto;

  @media (min-width: 1236px) {
    max-width: 1190px;
  }
`;
