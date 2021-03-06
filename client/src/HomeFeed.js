import React from 'react';
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';
import LittleTweet from './LittleTweet';
import NewTweet from './NewTweet';

const HomeFeed = ({currentUser}) => {
//State for the loading screen of the homefeed
const [homeFeedStatus, setHomeFeedStatus] = React.useState('loading');
const [homeFeedTweetIds, setHomeFeedTweetIds] = React.useState(null);
const [homeFeedTweetByIds, setHomeFeedTweetByIds] = React.useState(null);

  //Fetching HomeFeed
  React.useEffect(() => {
    fetch('/api/me/home-feed')
    .then(res => {
        if(!res.ok){
            throw Error(res.statusText);
        }
        return res;
    })
    .then(res => res.json())
    .then(data => {
      setHomeFeedTweetIds(data.tweetIds);
      setHomeFeedTweetByIds(data.tweetsById);
      setHomeFeedStatus('idle');
    })
    .catch(err => console.log(err));
  }, [])

  if(homeFeedStatus !== 'idle'){
    return(
      // Loading animation
      <CircularProgress style={{margin: 'auto'}} />
    )
  } else {
  return (
    <Wrapper>
      <NewTweet
        currentUser={currentUser}
      />
      {homeFeedTweetIds.map(tweetId => {
        return (
          <LittleTweet 
            key={homeFeedTweetByIds[tweetId].id}
            handle={homeFeedTweetByIds[tweetId].author.handle}
            displayName={homeFeedTweetByIds[tweetId].author.displayName}
            avatarSrc={homeFeedTweetByIds[tweetId].author.avatarSrc}
            id={homeFeedTweetByIds[tweetId].id}
            isLiked={homeFeedTweetByIds[tweetId].isLiked}
            isRetweeted={homeFeedTweetByIds[tweetId].isRetweeted}
            media={homeFeedTweetByIds[tweetId].media}
            numLikes={homeFeedTweetByIds[tweetId].numLikes}
            numRetweets={homeFeedTweetByIds[tweetId].numRetweets}
            status={homeFeedTweetByIds[tweetId].status}
            timestamp={Date.parse(homeFeedTweetByIds[tweetId].timestamp)}
          />
        )
      })}
    </Wrapper>
  )
  }
}

const Wrapper = styled.div`
width: 75%;
`

export default HomeFeed;