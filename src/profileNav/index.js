import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { StyledHeader } from "../styled.js";
import { StyledContainer } from "../styled.js";
import { StyledNavLink } from "../styled.js";
import { StyledListMenu } from "../styled.js";
import { TwitterButton } from "../styled.js";
import iconMore from "./icon-more.svg";
import { StyledIcon } from "../styled.js";
import { StyledList } from "../styled.js";
import { Avatar } from "../styled.js";

class ProfileNav extends Component {
  render() {
    return (
      <StyledHeader>
        <div className="row">
          <picture>
            <img
              src={process.env.PUBLIC_URL + "/img/cover-image.jpg"}
              alt="profileImage"
            />
          </picture>
        </div>
        <StyledContainer>
          <div className="row middle-md middle-lg between-md between-lg">
            <div className="col-md-3 col-lg-3">
              <Avatar
                src={process.env.PUBLIC_URL + "/img/ei-avatar.png"}
                alt="avatar"
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="row">
                <StyledList>
                  <StyledListMenu>
                    <StyledNavLink to="/">
                      Tweet<br />
                      <span>8,058</span>
                    </StyledNavLink>
                  </StyledListMenu>
                  <StyledListMenu>
                    <StyledNavLink to="/">
                      Tweet<br />
                      <span>8,058</span>
                    </StyledNavLink>
                  </StyledListMenu>
                  <StyledListMenu>
                    <StyledNavLink to="/">
                      Tweet<br />
                      <span>8,058</span>
                    </StyledNavLink>
                  </StyledListMenu>
                  <StyledListMenu>
                    <StyledNavLink to="/">
                      Tweet<br />
                      <span>8,058</span>
                    </StyledNavLink>
                  </StyledListMenu>
                  <StyledListMenu>
                    <StyledNavLink to="/">
                      Tweet<br />
                      <span>8,058</span>
                    </StyledNavLink>
                  </StyledListMenu>
                </StyledList>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <TwitterButton type="submit">Follow</TwitterButton>
              <StyledIcon src={iconMore} alt="MoreButton" />
            </div>
          </div>
        </StyledContainer>
      </StyledHeader>
    );
  }
}

export default ProfileNav;
