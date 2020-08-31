import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from './constants';

const Sidebar = () => {
  return(
    <Wrapper>
      <SidebarComponent to='/'>Logo</SidebarComponent>
      <SidebarComponent to='/'>Home</SidebarComponent>
      <SidebarComponent to='/:profileId'>Profile</SidebarComponent>
      <SidebarComponent to='/notifications'>Notifications</SidebarComponent>
      <SidebarComponent to='/bookmarks'>Bookmarks</SidebarComponent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* temp */
  border: 1px black solid;

  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end; 
`

const SidebarComponent = styled(NavLink)`
`

export default Sidebar;