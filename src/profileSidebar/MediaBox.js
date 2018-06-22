import React, { Component } from "react";
import styled from "styled-components";
import iconMedia from "./icon-media.svg";
import { StyledIcon } from "../styled.js";

const mediaCount = props => props.mediaCount;

const MediaBox = props => (
  <div className="row">
    {props.mediaCount > 0 && (
      <p>
        <StyledIcon src={iconMedia} alt="icon media" />
        {props.mediaCount} Photos and videos
      </p>
    )}
  </div>
);
export default MediaBox;
