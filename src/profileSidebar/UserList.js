import React, { Component } from "react";
import styled from "styled-components";
import { Avatar } from "../styled.js";
import { Link } from "react-router-dom";

const UserList = props => (
  <Link to={props.userAccountLink}>
    <Avatar
      kind="userprofile"
      src={props.profileLink}
      alt={props.userAccount}
    />
  </Link>
);
export default UserList;
