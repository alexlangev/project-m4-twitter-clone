// This is the tweet format for tweetDeatils page
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';

import TweetActionBar from './TweetActionBar';

const BigTweet = (props) => {
  let formatedDate = format(new window.Date(props.timestamp),"MMM do yyyy");
  if(props.media.length === 0){
    return(
      <Wrapper>
        < BigTweetHeader>
          <Link to={`/${props.handle}`}>
            <Avatar src={props.avatarSrc} />
          </Link>
        <TweetSource>
          <Link to={`/${props.handle}`}>
            <DisplayName><strong>{props.displayName}</strong></DisplayName>
          </Link>
          <Link to={`/${props.handle}`}>
            <Handle>{`@${props.handle}`}</Handle>
          </Link>
        </TweetSource>
        </BigTweetHeader>
        <Status>{props.status}</Status>
        <TimeLine>{`${formatedDate} · Critter web app`}</TimeLine>
        <TweetActionBar
          isLiked={props.isLiked}
          id={props.id}
        />
      </Wrapper>
    )
  } else {
    const imgUrl = props.media[0].url;
    return(
      <Wrapper>
        < BigTweetHeader>
          <Link to={`/${props.handle}`}>
            <Avatar src={props.avatarSrc} />
          </Link>
          <Link to={`/${props.handle}`}>
            <DisplayName><strong>{`${props.displayName}`}</strong></DisplayName>
          </Link>
        <TweetSource>
          <Link to={`/${props.handle}`}>
            <Handle>{`@${props.handle}`}</Handle>
          </Link>
        </TweetSource>
        </BigTweetHeader>
        <Status>{props.status}</Status>
        <TweetImage src={imgUrl}/>
        <TimeLine>{`${formatedDate} · Critter web app`}</TimeLine>
        <TweetActionBar
          isLiked={props.isLiked}
          id={props.id}
        />
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
  padding: 5pt 0 0 5pt;
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