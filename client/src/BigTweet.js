// This is the tweet format for tweetDeatils page

import React from 'react';
import styled from 'styled-components';

import TweetActionBar from './TweetActionBar';

const BigTweet = (props) => {
  return(
    <Wrapper>
      <div>{props.handle}</div>
      <div>{props.displayName}</div>
      <TweetActionBar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

export default BigTweet;