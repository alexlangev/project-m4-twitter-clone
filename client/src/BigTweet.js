// This is the tweet format for tweetDeatils page

import React from 'react';
import styled from 'styled-components';

import TweetActionBar from './TweetActionBar';

const BigTweet = (props) => {
  console.log(props.media.length);
  if(props.media.length === 0){
    return(
      <Wrapper>
        < BigTweetHeader>
        <Avatar src={props.avatarSrc} />
        <TweetSource>
          <DisplayName><strong>{props.displayName}</strong></DisplayName>
          <Handle>{`@${props.handle}`}</Handle>
        </TweetSource>
        </BigTweetHeader>
        <Status>{props.status}</Status>
        <TweetActionBar />
      </Wrapper>
    )
  } else {
    const imgUrl = props.media[0].url;
    return(
      <Wrapper>
        < BigTweetHeader>
        <Avatar src={props.avatarSrc} />
        <TweetSource>
          <DisplayName><strong>{props.displayName}</strong></DisplayName>
          <Handle>{`@${props.handle}`}</Handle>
        </TweetSource>
        </BigTweetHeader>
        <Status>{props.status}</Status>
        <TweetImage src={imgUrl}/>
        <TimeLine>{`${props.timestamp} · ${props.timestamp} · Critter web app`}</TimeLine>
        <TweetActionBar />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 70%; 
  display: flex;
  flex-direction: column;
`

const BigTweetHeader = styled.div`
  margin-top: 15pt;
  display: flex;
  flex-direction: row;
`

const TweetSource = styled.div`
  display: flex;
  flex-direction: column;
`

const Avatar = styled.img`
  margin: 0 10pt;
  border-radius: 50%;
  height: 50pt;
`

const DisplayName = styled.p`
  padding: 5pt 0 0 0;
`

const Handle = styled.p`
  padding: 5pt 0 0 0;
`

const Status = styled.p`
  font-weight: 600;
  font-size: 15pt;
  margin: 10pt;
`

const TweetImage = styled.img`
  margin: 0 10pt;
  width: 100%;
  max-height: 60vh;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 25pt;
`

const TimeLine = styled.p`
  margin: 10pt;
`

export default BigTweet;