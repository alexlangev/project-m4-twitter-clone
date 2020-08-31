import React from 'react';
import styled from 'styled-components';

import TweetActionBar from './TweetActionBar';

const LittleTweet = (props) => {
  return(
    <Wrapper>
      <TweetActionBar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

export default LittleTweet;