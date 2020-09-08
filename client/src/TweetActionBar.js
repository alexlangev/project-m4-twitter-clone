import React from 'react';
import styled from 'styled-components';
import {FiHeart, FiMessageCircle, FiRepeat, FiUpload} from 'react-icons/fi';

const TweetActionBar = () => {
  return(
    <Wrapper>
      <FiMessageCircle />
      <FiRepeat />
      <FiHeart />
      <FiUpload />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10pt 0;
  padding: 0 30pt;
`

export default TweetActionBar;