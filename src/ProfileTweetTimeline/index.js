import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  StyledNavLink,
  StyledList,
  StyledListMenu,
  StyledSpace
} from "../styled.js";
import TweetPost from "./TweetPost";

const TweetNav = styled.nav``;
const StyledTimeline = styled.section`
  background-color: #fff;
`;

class TweetTimeline extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <StyledSpace />
        <StyledTimeline>
          <TweetNav>
            <StyledList>
              <div className="row">
                <StyledListMenu>
                  <StyledNavLink to="/">Tweets</StyledNavLink>
                </StyledListMenu>
                <StyledListMenu>
                  <StyledNavLink to="/">Tweets & Replies</StyledNavLink>
                </StyledListMenu>
                <StyledListMenu>
                  <StyledNavLink to="/">Media</StyledNavLink>
                </StyledListMenu>
              </div>
            </StyledList>
          </TweetNav>

          <TweetPost
            pinned="pinned"
            tweetLink="/"
            userAvatar={process.env.PUBLIC_URL + "./img/avatar.png"}
            name="Every Interaction"
            accountName="EveryInteract"
            date="May,2 2008"
            tweetText="We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ "
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
  }
}

export default TweetTimeline;
