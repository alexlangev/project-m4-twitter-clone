import React from 'react';
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';
import LittleTweet from './LittleTweet';

const ProfileFeed = ({handle}) => {
//State for the profile feed.
const [profileFeedStatus, setProfileFeedStatus] = React.useState('loading');
const [profileFeedTweetIds, setProfileFeedTweetIds ] = React.useState(null);
const [profileFeedTweetByIds, setProfileFeedTweetByIds] = React.useState(null);

// Fetching tweets by the user
React.useEffect(() => {
  fetch(`/api/${handle}/feed`)
  .then(res => {
      if(!res.ok){
          throw Error(res.statusText);
      }
      return res;
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setProfileFeedTweetIds(data.tweetIds);
    setProfileFeedTweetByIds(data.tweetsById);
    setProfileFeedStatus('idle');
  })
  .catch(err => console.log(err));
}, [handle]);


if(profileFeedStatus !== 'idle'){
  return(
    // Loading animation
    <CircularProgress style={{margin: 'auto'}} />
  )
} else {
  return (
    <Wrapper>
      {profileFeedTweetIds.map(tweetId => {
        return (
          <LittleTweet 
            key={profileFeedTweetByIds[tweetId].id}
            handle={profileFeedTweetByIds[tweetId].author.handle}
            displayName={profileFeedTweetByIds[tweetId].author.displayName}
            avatarSrc={profileFeedTweetByIds[tweetId].author.avatarSrc}
            // More info bout the author??
            id={profileFeedTweetByIds[tweetId].id}
            isLiked={profileFeedTweetByIds[tweetId].isLiked}
            isRetweeted={profileFeedTweetByIds[tweetId].isRetweeted}
            media={profileFeedTweetByIds[tweetId].media}
            numLikes={profileFeedTweetByIds[tweetId].numLikes}
            numRetweets={profileFeedTweetByIds[tweetId].numRetweets}
            status={profileFeedTweetByIds[tweetId].status}
            timestamp={profileFeedTweetByIds[tweetId].timestamp}
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

export default ProfileFeed;