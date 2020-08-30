import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Bookmarks from './Bookmarks';
import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Profile from './Profile';
import TweetDetails from './TweetDetails';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
