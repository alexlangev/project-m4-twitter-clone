import React from 'react';
import styled from 'styled-components';

import ProfileHeader from './ProfileHeader';
import ProfileActions from './ProfileActions';
import ProfileFeed from './ProfileFeed';

const Profile = (props) => {
  //Getting User Handle from window
  const handle = window.location.href.split('/')[3];
  console.log(handle)

  //State for Tweet info
  const [userInfo, setUserInfo] = React.useState({
      handle: "",
      displayName: "",
      avatarSrc: "",
      bannerSrc: "",
      location: "",
      joined: "",
      bio: "",
      numFollowing: 0,
      numFollowers: 0,
      numLikes: 0,
      isFollowingYou: false,
      isBeingFollowedByYou: false ,
    });

  const [userInfoStatus, setUserInfoStatus] = React.useState('loading');

    //Fetching user info
    React.useEffect(() => {
      fetch(`/api/${handle}/profile`)
      .then(res => {
          if(!res.ok){
              throw Error(res.statusText);
          }
          return res;
      })
      .then(res => res.json())
      .then(data => {
        setUserInfo({
          ...userInfo,
          handle: data.profile.handle,
          displayName: data.profile.displayName,
          avatarSrc: data.profile.avatarSrc,
          bannerSrc: data.profile.bannerSrc,
          location: data.profile.location,
          joined: data.profile.joined,
          bio: data.profile.bio,
          numFollowing: data.profile.numFollowing,
          numFollowers: data.profile.numFollowers,
          numLikes: data.profile.numLikes,
          isFollowingYou: data.profile.isFollowingYou,
          isBeingFollowedByYou: data.profile.isBeingFollowedByYou,
        });
        setUserInfoStatus('idle');
      })
      .catch(err => console.log(err));
    }, [])


  return(
    <ProfileWrapper>
      <ProfileHeader />
      <ProfileActions />
      <ProfileFeed />
    </ProfileWrapper>
  ) 
}

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Profile;