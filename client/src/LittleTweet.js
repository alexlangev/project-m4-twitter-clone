// This is the tweet format for the HomeFeed
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TweetActionBar from './TweetActionBar';

const LittleTweet = (props) => {
  return(
    <Wrapper to={`/tweet/${props.id}`}>
      <h1>{props.handle}</h1>
      <TweetActionBar />
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
`

export default LittleTweet;