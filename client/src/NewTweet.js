import React from 'react';
import styled from 'styled-components';
import { COLORS } from './constants';

const NewTweet = ({currentUser}) => {
  return(
    <NewTweetWrapper>
      <Home>Home</Home>
      <TweetBox>
        <TweetBoxAvatar src={currentUser.profile.avatarSrc}/>
        <TweetBoxInput
          cols="60" 
          rows="5"
          maxLength="280"
        />
        <MeowButtonWrapper>
          <MeowButton>Meow</MeowButton>
        </MeowButtonWrapper>
      </TweetBox>
    </NewTweetWrapper>
  )
}

const NewTweetWrapper = styled.div`
`

const Home = styled.h1`
  width: 100%;
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
`

const TweetBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TweetBoxAvatar = styled.img`
  margin: 0 10pt;
  border-radius: 50%;
  height: 50pt;
`

const TweetBoxInput = styled.textarea`
resize: none;
font-size: 15px;
`

const MeowButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 90px;
`

const MeowButton = styled.button`
  color: white;
  background-color: ${COLORS.primary};
  font-weight: bold;
  height: 30px;
  width: 60px;
  margin-left: 10px;
  border-radius: 10px;
`

export default NewTweet;