import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { StyledSidebar } from "../styled.js";
import UserInfo from "./UserInfo";
import FollowersList from "./FollowersList";
import UserList from "./UserList";
import MediaBox from "./MediaBox";
import MediaItem from "./MediaBoxItem";
import {
  TwitterButton,
  StyledIcon,
  StyledList,
  StyledSpace
} from "../styled.js";

const ProfileUserList = StyledList.extend``;
const ProfileUserListItem = styled.li``;

class ProfileSidebar extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <StyledSpace />
        <StyledSidebar>
          <UserInfo
            name="Every Interaction"
            isAccountVerified="verified"
            accountName="@EveryInteract"
            isUserFollowsYou="yes"
            description="UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing."
            location="London, UK"
            link="everyinteraction.com"
            date="May 2008"
          />
          <TwitterButton type="submit">Tweet to</TwitterButton>
          <TwitterButton type="submit">Message</TwitterButton>

          <div className="row">
            <FollowersList followersCount={6} />
            <ProfileUserList>
              <ProfileUserListItem>
                <UserList
                  userAccountLink="/"
                  profileLink={process.env.PUBLIC_URL + "/img/followers/1.png"}
                  userAccount="User_1"
                />
              </ProfileUserListItem>
              <ProfileUserListItem>
                <UserList
                  userAccountLink="/"
                  profileLink={process.env.PUBLIC_URL + "/img/followers/2.png"}
                  userAccount="User_2"
                />
              </ProfileUserListItem>
              <ProfileUserListItem>
                <UserList
                  userAccountLink="/"
                  profileLink={process.env.PUBLIC_URL + "/img/followers/3.png"}
                  userAccount="User_3"
                />
              </ProfileUserListItem>
              <ProfileUserListItem>
                <UserList
                  userAccountLink="/"
                  profileLink={process.env.PUBLIC_URL + "/img/followers/4.png"}
                  userAccount="User_4"
                />
              </ProfileUserListItem>
              <ProfileUserListItem>
                <UserList
                  userAccountLink="/"
                  profileLink={process.env.PUBLIC_URL + "/img/followers/5.png"}
                  userAccount="User_5"
                />
              </ProfileUserListItem>
              <ProfileUserListItem>
                <UserList
                  userAccountLink="/"
                  profileLink={process.env.PUBLIC_URL + "/img/followers/6.png"}
                  userAccount="User_6"
                />
              </ProfileUserListItem>
            </ProfileUserList>
          </div>

          <MediaBox mediaCount={522} />
          <div className="row">
            <MediaItem
              tweetLink="/"
              mediaLink={process.env.PUBLIC_URL + "/img/media/1.jpg"}
              mediaDescription="media_1"
            />
            <MediaItem
              tweetLink="/"
              mediaLink={process.env.PUBLIC_URL + "/img/media/2.jpg"}
              mediaDescription="media_2"
            />
            <MediaItem
              tweetLink="/"
              mediaLink={process.env.PUBLIC_URL + "/img/media/3.jpg"}
              mediaDescription="media_3"
            />
            <MediaItem
              tweetLink="/"
              mediaLink={process.env.PUBLIC_URL + "/img/media/4.jpg"}
              mediaDescription="media_4"
            />
            <MediaItem
              tweetLink="/"
              mediaLink={process.env.PUBLIC_URL + "/img/media/5.jpg"}
              mediaDescription="media_5"
            />
            <MediaItem
              tweetLink="/"
              mediaLink={process.env.PUBLIC_URL + "/img/media/6.jpg"}
              mediaDescription="media_6"
            />
          </div>
        </StyledSidebar>
      </div>
    );
  }
}

export default ProfileSidebar;
