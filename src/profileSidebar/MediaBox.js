import React, { Component } from "react";
import styled from "styled-components";
import iconMedia from "./icon-media.svg";

const mediaCount = props => props.mediaCount;

const StyledIcon = styled.img`
  margin-right: 3px;
  margin-left: 3px;
`;

const MediaBox = props => (
  <div className="">
    {props.mediaCount > 0 && (
      <p>
        <StyledIcon src={iconMedia} alt="icon media" />
        {props.mediaCount} Photos and videos
      </p>
    )}
  </div>
);
export default MediaBox;
