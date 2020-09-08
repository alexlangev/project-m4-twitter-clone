import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from './constants';
import logo from './assets/logo.svg';

const Sidebar = () => {
  return(
    <Wrapper>
      <SidebarComponent exact to='/'>
          <Logo src={logo}/>
      </SidebarComponent>

      <SidebarComponent exact to='/'>
        <SidebarLabel>
          Home
        </SidebarLabel>
      </SidebarComponent>

      <SidebarComponent to='/:profileId'>
        <SidebarLabel>
          Profile
        </SidebarLabel>
      </SidebarComponent>

      <SidebarComponent to='/notifications'>
        <SidebarLabel>
          Notifications
        </SidebarLabel>
      </SidebarComponent>

      <SidebarComponent to='/bookmarks'>
        <SidebarLabel>
          Bookmarks
        </SidebarLabel>
      </SidebarComponent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end; 
`

const SidebarLabel = styled.div`
  display: inline-block;
  border-radius: 15px;
  padding: 10px;

  &:hover {
    background-color: 
      ${COLORS.primaryHighlighted};
    
  };
`

const SidebarComponent = styled(NavLink)`
  width: 75%;
  font-size: 20px;
  padding: 10px;
  margin-top: 5px;

  &.active {
    color: ${COLORS.primary};
    };
`

const Logo = styled.img`
color: {color: ${COLORS.primary}};
height: 45px;
`

export default Sidebar;