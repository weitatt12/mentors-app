import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Mobile from './pages/MobilePage';
import Login from './pages/LoginPage';
import Mentor from './pages/MentorPage';
import MentorProfile from './pages/MentorProfilePage';

class App extends React.Component {

  render() {
    return(
      <>
        <Switch>
          <Route exact path="/" component={Mobile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mentor" component={Mentor} />
          <Route exact path="/mentor_profile" component={MentorProfile} />
        </Switch>
      </>
    );
  }
}

export default App;

