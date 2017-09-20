import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MessageContainer from './messages/MessageContainer';

class AppContainer extends Component {

  render() {
    return (
      <section>
        <Router>
          <div>
            <Switch />            
              <Route
                exact                       
                path="/"
                component={MessageContainer} />                                               
              <Switch />
          </div>
        </Router>
      </section>
    );
  }
}
export default AppContainer;