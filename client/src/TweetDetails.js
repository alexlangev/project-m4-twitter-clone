import React from 'react';
import styled from 'styled-components';

import BigTweet from './BigTweet';
import CircularProgress from '@material-ui/core/CircularProgress';

const TweetDetails = () => {
  //Getting Tweet Id from window
  const id = window.location.href.split('/')[4];

  //State for Tweet info
  const [tweetDetails, setTweetDetails] = React.useState({
    id: null,
    handle: null,
    displayName: null,
    avatarSrc: null,
    bannerSrc: null,
    url: null,
    timestamp: null,
    status: null,
    imgUrl: null,
  });
  const [tweetDetailsStatus, setTweetDetailsStatus] = React.useState('loading');

  //Fetching Tweet Info from that Id
  React.useEffect(() => {
    fetch(`/api/tweet/${id}`)
    .then(res => {
        if(!res.ok){
            throw Error(res.statusText);
        }
        return res;
    })
    .then(res => res.json())
    .then(data => {
      setTweetDetails({
        ...tweetDetails,
        id: data.tweet.id,
        handle: data.tweet.author.handle,
        displayName: data.tweet.author.displayName,
        avatarSrc: data.tweet.author.avatarSrc,
        bannerSrc: data.tweet.author.bannerSrc,
        timestamp: data.tweet.timestamp,
        status: data.tweet.status,
        
      });
      setTweetDetailsStatus('idle');
    })
    .catch(err => console.log(err));
  }, [])


  if(tweetDetailsStatus === 'idle'){
    return(
      <Wrapper>
        <BigTweet 
          id={tweetDetails.id}
          handle={tweetDetails.handle}
          displayName={tweetDetails.displayName}
          avatarSrc={tweetDetails.avatarSrc}
          bannerSrc={tweetDetails.bannerSrc}
          timestamp={tweetDetails.timestamp}
          status={tweetDetails.status}
        />
      </Wrapper>
    )
  } else {

    return(
      <Wrapper>
        <CircularProgress style={{margin: 'auto'}} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
`

export default TweetDetails;