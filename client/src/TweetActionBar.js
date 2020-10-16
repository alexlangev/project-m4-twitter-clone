import React from 'react';
import styled from 'styled-components';
import {FiHeart, FiMessageCircle, FiRepeat, FiUpload} from 'react-icons/fi';
import { COLORS } from './constants';

const TweetActionBar = (props) => {
  //a piece of state for real time rendering of like button
  const [sessionIsLiked, setSessionIsLiked] = React.useState(props.isLiked);

  const handleLikeClick = () => {
    setSessionIsLiked(!sessionIsLiked);

    if(props.isLiked){
    fetch(`/api/tweet/${props.id}/like`, {
      method: "PUT",
      body: JSON.stringify({
        like: false,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .catch((err) => {
      console.log(err);
    });
    } else {
      fetch(`/api/tweet/${props.id}/like`, {
        method: "PUT",
        body: JSON.stringify({
        like: true,
      }),
      headers: {
      Accept: "application/json",
        "Content-Type": "application/json",
      },
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  return(
    <Wrapper>
      <CommentButton><FiMessageCircle /></CommentButton>
      <RetweetButton><FiRepeat /></RetweetButton>
      <LikeButton onClick={handleLikeClick}>
      {sessionIsLiked ? (
        <FiHeart style={{fill: COLORS.primaryHighlighted}}/>
        ):(
        <FiHeart style={{fill: 'white'}}/>
      )}
      </LikeButton>
      <UploadButton><FiUpload /></UploadButton>
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

const CommentButton = styled.button`
`

const RetweetButton = styled.button`
`

const LikeButton = styled.button`
`

const UploadButton = styled.button`
`

export default TweetActionBar;






