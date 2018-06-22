import React, { Component } from "react";
import styled from "styled-components";
import { Avatar } from "../styled.js";
import { Link } from "react-router-dom";

const MediaItem = props => (
  <Link to={props.tweetLink}>
    <img src={props.mediaLink} alt={props.mediaDescription} />
  </Link>
);
export default MediaItem;
