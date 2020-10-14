import React from 'react';
import styled from 'styled-components';
import { COLORS } from './constants';

const ProfileBanner = ({avatarSrc, bannerSrc}) => {
  return(
    <HeaderWrapper>
      <BannerSection>
        <BannerImg src={bannerSrc}/>
        <BannerHorizontal>
          <BannerAvatar src={avatarSrc}/>
          <FollowingButton>Following</FollowingButton>
        </BannerHorizontal>
      </BannerSection>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const BannerSection =  styled.div`
  display: flex;
  flex-direction: column;
`

const BannerHorizontal = styled.div`
  height: 125px;
  position: relative;
  top: -75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const BannerImg = styled.img`
  height: 40vh;
`

const BannerAvatar = styled.img`
  margin: 0 25px;
  height: 250px;
  border-radius: 50%;
  border: solid white 5px;
  position: relative;
`

const FollowingButton = styled.button`
  margin: 0 25px;
  padding: 10px 25px;
  border-radius: 50px;
  position: relative;
  top: 100px;
  color: white;
  background-color: ${COLORS.primary};
`

export default ProfileBanner;