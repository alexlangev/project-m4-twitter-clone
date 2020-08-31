import React from 'react';
import {BrowserRouter , Switch, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';

//Components
import Sidebar from './Sidebar';
import Bookmarks from './Bookmarks';
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Profile from './Profile';
import TweetDetails from './TweetDetails';

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <HomeFeed />
          </Route>

          <Route exact path='/notifications'>  
            <Notifications />
          </Route>

          <Route exact path='/bookmarks'>
            <Bookmarks />
          </Route>

          <Route exact path='/tweet/:tweetId'>
            <TweetDetails />
          </Route>

          <Route exact path='/:profileId'>
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export default App;
