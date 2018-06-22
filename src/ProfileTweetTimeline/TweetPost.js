import React, { Component } from "react";
import styled from "styled-components";
import { format, compareAsc } from "date-fns";
import { Link } from "react-router-dom";
import { Avatar, StyledIcon } from "../styled.js";
import iconComment from "./icon-comment.svg";
import iconEnvelope from "./icon-envelope.svg";
import iconLove from "./icon-loves.svg";
import iconRetweet from "./icon-retweet.svg";
import iconNoLove from "./icon-no-love.svg";
import iconPinned from "./icon-pinned.svg";

const TweetPostBox = styled.div`
  background-color: #fff;
  color: #14171a;
`;
const UserName = styled.span``;
const UserNameAccount = styled.span``;
const PostDate = styled.span``;
const PinnedTweet = styled.div``;
const TweetHeader = styled.header``;
const TweetContent = styled.div``;
const ActionFooter = styled.footer``;
const ActionButton = styled.button``;
const Tweet = styled.div``;
const TweetMedia = styled.div``;
const TweetHashtag = styled.span`
  color: #1da1f2;
`;
const TweetMediaImage = styled.img`
  max-width: 100%;
`;
const TweetMediaArticle = styled.a``;

const TweetPost = props => (
  <TweetPostBox to={props.tweetLink}>
    {props.pinned == "pinned" && (
      <div className="row">
        <PinnedTweet>
          <StyledIcon src={iconPinned} alt="Pinned Icon" />
          <span>Pinned Tweet</span>
        </PinnedTweet>
      </div>
    )}
    <div className="row">
      <div className="col-lg-1">
        <Avatar src={props.userAvatar} alt={props.userAvatar} />
      </div>
      <div className="col-lg-11">
        <TweetHeader>
          <UserName>{props.name}</UserName>
          <UserNameAccount>@{props.accountName}</UserNameAccount>
          <PostDate>{format(props.date, "● DD MMMM YYYY")}</PostDate>
        </TweetHeader>
        <TweetContent>
          <Tweet>
            <p>
              {props.tweetText}
              <a href={props.tweetTextLink}>{props.tweetTextLink}</a>
              <TweetHashtag>{props.tweetHashtag}</TweetHashtag>
            </p>
          </Tweet>
          <TweetMedia>
            {props.tweetImageLink && (
              <TweetMediaImage
                src={props.tweetImageLink}
                alt={props.tweetImageLink}
              />
            )}
            {props.mediaArticleLink && (
              <TweetMediaArticle href={props.mediaArticleLink}>
                <div className="row">
                  <div className="col-lg-3">
                    <img
                      src={props.articlePreviewImage}
                      alt={props.articlePreviewImage}
                    />
                  </div>
                  <div className="col-lg-9">
                    <h5>{props.articleTitle}</h5>
                    <p>
                      {props.articlePreview}
                      <br />
                      <span>{props.articleLink}</span>
                    </p>
                  </div>
                </div>
              </TweetMediaArticle>
            )}
          </TweetMedia>
        </TweetContent>
        <ActionFooter>
          <ActionButton type="submit">
            <StyledIcon src={iconComment} alt="Comment Icon" />
            {props.commentCount > 0 && <span>{props.commentCount}</span>}
          </ActionButton>
          <ActionButton type="submit">
            <StyledIcon src={iconRetweet} alt="Retweet Icon" />
            {props.retweetCount > 0 && <span>{props.retweetCount}</span>}
          </ActionButton>
          <ActionButton type="submit">
            {props.loveCount > 0 && (
              <StyledIcon src={iconLove} alt="Love Icon" />
            )}
            {props.loveCount == "" && (
              <StyledIcon src={iconNoLove} alt="Blank Love Icon" />
            )}
            <span>{props.loveCount}</span>
          </ActionButton>
          <ActionButton type="submit">
            <StyledIcon src={iconEnvelope} alt="Envelope Icon" />
            {props.envelopeCount > 0 && <span>{props.envelopeCount}</span>}
          </ActionButton>
        </ActionFooter>
      </div>
    </div>
  </TweetPostBox>
);
export default TweetPost;
