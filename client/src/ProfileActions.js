import React from 'react';
import styled from 'styled-components';
import { COLORS } from './constants';

const ProfileActions = () => {
  return(
    <ActionsWrapper>
      <Tweets>Tweets</Tweets>
      <Media>Media</Media>
      <Likes>Likes</Likes>
    </ActionsWrapper>
  )
}

const ActionsWrapper = styled.div`
  width: 100%;
`

const Tweets = styled.button`
  width: 33.3%;
  border-bottom: solid 1px darkgrey;
  padding: 20px;

  &:hover {
    color: ${COLORS.primary};
    border-bottom: solid 3px ${COLORS.primary};
  }
`

const Media = styled.button`
  width: 33.3%;
  border-bottom: solid 1px darkgrey;
  padding: 20px;

  &:hover {
    color: ${COLORS.primary};
    border-bottom: solid 3px ${COLORS.primary};
  }
`

const Likes = styled.button`
  width: 33.3%;
  border-bottom: solid 1px darkgrey;
  padding: 20px;

  &:hover {
    color: ${COLORS.primary};
    border-bottom: solid 3px ${COLORS.primary};
  }
`

export default ProfileActions;