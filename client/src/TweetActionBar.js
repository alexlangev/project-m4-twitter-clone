import React from 'react';
import styled from 'styled-components';
import {FiHeart, FiMessageCircle, FiRepeat, FiUpload} from 'react-icons/fi';
import { COLORS } from './constants';

const TweetActionBar = (props) => {
  const heartColour = 'white';

  // State for isLiked
  const [isLiked, setIsLiked] = React.useState(props.isLiked);

  return(
    <Wrapper>
      <FiMessageCircle />
      <FiRepeat />
      <FiHeart style={{fill: heartColour}} />
      <FiUpload />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10pt 0;
  padding: 0 30pt;
  /* This is a quick fix but is not the best way to position the action bar */
  position: relative; 
  right: 5%;
`

export default TweetActionBar;






