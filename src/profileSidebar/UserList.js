import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Avatar = styled.img`
  border-radius: 0px;
  margin: 5px 0 0 5px;
`;

const UserList = props => (
  <Link to={props.userAccountLink}>
    <Avatar src={props.profileLink} alt={props.userAccount} />
  </Link>
);
export default UserList;
