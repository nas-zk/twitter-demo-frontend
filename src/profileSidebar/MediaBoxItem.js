import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MediaPreview = styled.img`
  margin-right: 5px;
`;

const MediaItem = props => (
  <Link to={props.tweetLink}>
    <MediaPreview src={props.mediaLink} alt={props.mediaDescription} />
  </Link>
);
export default MediaItem;
