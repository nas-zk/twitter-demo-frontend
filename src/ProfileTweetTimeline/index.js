import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import TweetPost from "./TweetPost";

const TweetNav = styled.nav`
  border: 1px solid #e6ecf0;
`;
const StyledTimeline = styled.section`
  background-color: #fff;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid #fff;
  color: #1da1f2;
  font-size: 18px;
  font-weight: bold;

  &.active {
    color: #292f33;
  }
`;

const StyledSpace = styled.div`
  background-color: #14171a;
  margin-top: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  margin: 0;
`;

const StyledListMenu = styled.li`
  list-style: none;
  align-self: baseline;
  padding: 15px 23px 12px;
  font-weight: bold;
`;

const TweetTimeline = props => (
  <div className="col-lg-6">
    <StyledSpace />
    <StyledTimeline>
      <TweetNav>
        <StyledList>
          <div className="row">
            <StyledListMenu>
              <StyledNavLink to="/everyinteract">Tweets</StyledNavLink>
            </StyledListMenu>
            <StyledListMenu>
              <StyledNavLink to="/everyinteract/Replies">
                Tweets & Replies
              </StyledNavLink>
            </StyledListMenu>
            <StyledListMenu>
              <StyledNavLink to="/everyinteract/Media">Media</StyledNavLink>
            </StyledListMenu>
          </div>
        </StyledList>
      </TweetNav>

      <TweetPost
        pinned={true}
        tweetLink="/"
        userAvatar={process.env.PUBLIC_URL + "./img/avatar.png"}
        name="Every Interaction"
        accountName="EveryInteract"
        date="May,2 2008"
        tweetText="We’ve made some more resources for all you wonderful #design folk "
        tweetTextLink="everyinteraction.com/resources/"
        tweetHashtag="#webdesign #UI"
        tweetImageLink={process.env.PUBLIC_URL + "./img/img-tweet1.png"}
        retweetCount={17}
        loveCount={47}
      />
      <TweetPost
        tweetLink="/"
        userAvatar={process.env.PUBLIC_URL + "./img/avatar.png"}
        name="Every Interaction"
        accountName="EveryInteract"
        date="May,2 2008"
        tweetText="Our new website concept; Taking you from… @EveryInteraction"
        tweetTextLink="instagram.com/p/BNFGrfhBP3M/"
        commentCount={1}
        retweetCount={4}
        loveCount={2}
      />
      <TweetPost
        tweetLink="/"
        userAvatar={process.env.PUBLIC_URL + "./img/avatar.png"}
        name="Every Interaction"
        accountName="EveryInteract"
        date="November 2008"
        loveCount=""
        tweetText="Variable web fonts are coming, and will open a world of opportunities for weight use online"
        mediaArticleLink="/"
        articlePreviewImage={
          process.env.PUBLIC_URL + "./img/preview-article1.png"
        }
        articleTitle="The Future of Web Fonts"
        articlePreview="We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…"
        articleLink="villijamis.com"
      />
    </StyledTimeline>
  </div>
);

export default TweetTimeline;
