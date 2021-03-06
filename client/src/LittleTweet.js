// This is the tweet format for the HomeFeed
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';

import TweetActionBar from './TweetActionBar';

const LittleTweet = (props) => {
  let formatedDate = format(new window.Date(props.timestamp),"MMM do");

  if(props.media.length === 0){
    return(
      <>
        <Wrapper to={`/tweet/${props.id}`}>
          <LittleTweetHeader>
            <Link to={`/${props.handle}`}>
              <Avatar src={props.avatarSrc} />
            </Link>
              <TweetText>
                <TweetSource>
                  <Link to={`/${props.handle}`}>
                    <DisplayName><strong>{props.displayName}</strong></DisplayName>
                  </Link>
                  <Link to={`/${props.handle}`}>
                    <Handle>{`@${props.handle} · `}</Handle>
                  </Link>
                  {/* Will need to fix this... */}
                  {/* format(new Date(2017, 10, 6), 'MMM') //=> 'Nov' */}
                  <Date>{formatedDate}</Date>
                </TweetSource>
                <Status>{props.status}</Status>
              </TweetText>
        </LittleTweetHeader>
      </Wrapper>
        <TweetActionBar
          isLiked={props.isLiked}
          id={props.id}
        />
      </>
    )
  } else {
    const imgUrl = props.media[0].url;
    return(
      <>
        <Wrapper to={`/tweet/${props.id}`}>
          <LittleTweetHeader>
            <Link to={`/${props.handle}`}>
              <Avatar src={props.avatarSrc} />
            </Link>
              <TweetText>
                <TweetSource>
                <Link to={`/${props.handle}`}>
                  <DisplayName><strong>{props.displayName}</strong></DisplayName>
                </Link>
                <Link to={`/${props.handle}`}>
                  <Handle>{`@${props.handle} · `}</Handle>
                </Link>
                  {/* Will need to fix this... */}
                  <Date>{formatedDate}</Date>
                </TweetSource>         
                <Status>{props.status}</Status>
              </TweetText>
          </LittleTweetHeader>
          <LittleTweetBody>
            <TweetImage src={imgUrl}/>
          </LittleTweetBody>
        </Wrapper>          
        <TweetActionBar
          isLiked={props.isLiked}
          id={props.id}
        />
      </>
    )
  }
}

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
`

const LittleTweetHeader = styled.div`
  margin-top: 15pt;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const LittleTweetBody = styled.div`
  width: 70%; 
  margin-left: 70pt;
  display: flex;
  flex-direction: column;
`

const TweetSource = styled.div`
  display: flex;
  flex-direction: row;
`

const TweetText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
`

const Avatar = styled.img`
  margin: 0 10pt;
  border-radius: 50%;
  height: 50pt;
`

const Handle = styled.p`
  margin : 0 5pt;
`

const DisplayName = styled.p`
`

const Date = styled.p`
`

const Status = styled.p`
  font-weight: 600;
`

const TweetImage = styled.img`
  width: 100%;
  max-height: 60vh;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 25pt;
`

export default LittleTweet;