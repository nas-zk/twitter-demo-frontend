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
  border: 1px solid #e6ecf0;
  padding-left: 13px;
`;
const PinnedTweet = styled.div`
  font-size: 12px;
  font-weight: bolder;
  color: #707e88;
`;

const TweetContent = styled.div`
  padding-right: 20px;
`;

const TweetHeader = styled.header`
  margin: 4px 0 4px 0;
`;

const UserName = styled.span`
  font-weight: bold;
  color: #292f33;
  padding-right: 3px;
`;
const UserNameAccount = styled.span`
  padding-right: 3px;
  color: #707e88;
  font-size: 13px;
`;
const PostDate = styled.span`
  padding-right: 3px;
  color: #707e88;
  font-size: 13px;
`;

const TweetText = styled.p`
  font-size: 20px;
  font-weight: lighter;
  margin: 6px 0 12px 0;

  a {
    color: #1da1f2;
    text-decoration: none;
  }
`;

const ActionFooter = styled.footer`
  margin: 13px 0 11px 0;
`;
const ActionButton = styled.button`
  background-color: #fff;
  border: none;
  margin-right: 35px;
  cursor: pointer;
  font-size: 13px;
`;

const LoveCount = styled.span`
  color: #e2264d;
`;
const Tweet = styled.div``;
const TweetMedia = styled.div``;
const TweetHashtag = styled.span`
  color: #1da1f2;
`;
const TweetMediaImage = styled.img`
  max-width: 100%;
`;
const TweetMediaArticle = styled.a`
  text-decoration: none;
  color: #292f33;
  h5,
  p {
    margin-top: 0;
  }
`;

const TweetPost = props => (
  <TweetPostBox to={props.tweetLink}>
    {props.pinned == "pinned" && (
      <PinnedTweet>
        <div className="row">
          <div className="col-md-1 col-lg-1 end-md end-lg">
            <StyledIcon src={iconPinned} alt="Pinned Icon" />
          </div>
          <div className="col-md-11 col-lg-11">
            <span>Pinned Tweet</span>
          </div>
        </div>
      </PinnedTweet>
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
            <TweetText>
              {props.tweetText}{" "}
              <a href={props.tweetTextLink}>{props.tweetTextLink}</a>
              <TweetHashtag>{props.tweetHashtag}</TweetHashtag>
            </TweetText>
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
            <LoveCount>{props.loveCount}</LoveCount>
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
