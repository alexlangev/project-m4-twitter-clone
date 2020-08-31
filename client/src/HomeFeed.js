import React from 'react';
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';
import LittleTweet from './LittleTweet';

const HomeFeed = () => {
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
      console.log(data);
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
      {homeFeedTweetIds.map(tweetId => {
        return (
          <LittleTweet 
          key={homeFeedTweetByIds[tweetId].id}
          handle={homeFeedTweetByIds[tweetId].author.handle}
          displayName={homeFeedTweetByIds[tweetId].author.displayName}
          avatarSrc={homeFeedTweetByIds[tweetId].author.avatarSrc}
          // More info bout the author??
          id={homeFeedTweetByIds[tweetId].id}
          isLiked={homeFeedTweetByIds[tweetId].isLiked}
          isRetweeted={homeFeedTweetByIds[tweetId].isRetweeted}
          url={homeFeedTweetByIds[tweetId].media.url}
          numLikes={homeFeedTweetByIds[tweetId].numLikes}
          numRetweets={homeFeedTweetByIds[tweetId].numRetweets}
          status={homeFeedTweetByIds[tweetId].status}
          timestamp={homeFeedTweetByIds[tweetId].timestamp}
          />
        )
      })}
    </Wrapper>
  )
  }
}

const Wrapper = styled.div`
`

export default HomeFeed;