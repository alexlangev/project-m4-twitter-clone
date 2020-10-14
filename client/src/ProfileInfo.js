import React from 'react';
import styled from 'styled-components';
import {FiCalendar} from 'react-icons/fi';
import {BsGeoAlt} from 'react-icons/bs';

const ProfileInfo = ({
  displayName,
  handle,
  bio,
  numFollowers,
  numFollowing,
  location,
  joined,
}) => {
  return (
    <ProfileInfoWrapper>
      <DisplayName>{displayName}</DisplayName>
      <Handle>{`@${handle}`}</Handle>
      <Bio>{bio}</Bio>
      <GeoInfo>
        <Location><BsGeoAlt/>{location}</Location>
        <Joined><FiCalendar/>{joined}</Joined>
      </GeoInfo>
      <FollowInfo>
        <NumFollowing><strong>{`${numFollowing}`}</strong> Following</NumFollowing>
        <NumFollowers><strong>{`${numFollowers}`}</strong> Followers</NumFollowers>
      </FollowInfo>
    </ProfileInfoWrapper>
  )
}

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left : 25px;
`

const DisplayName = styled.strong`
  margin: 5px 0;
`

const Handle = styled.p`
  margin: 5px 0;
`

const Bio = styled.p`
  margin: 5px 0;
`

const GeoInfo = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: row;
`

const Joined = styled.p`
  margin-right: 10px;
`

const Location = styled.p`
  margin-right: 10px;
`

const FollowInfo = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction:row
`

const NumFollowers = styled.p`
  margin-right: 10px;
`

const NumFollowing = styled.p`
  margin-right: 20px;
`

export default ProfileInfo;