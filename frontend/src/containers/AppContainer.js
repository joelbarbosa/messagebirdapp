import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'components/mbird/index';
import MessageContainer from './messages/MessageContainer';

class AppContainer extends Component {
  render() {
    return (
      <section>
        <Router>
          <div>
            <Switch />
              <Row className="col-9 center">
                <Container>            
                  <Route
                    exact                       
                    path="/"
                    component={MessageContainer} />
                </Container>
              </Row>                                          
            <Switch />
          </div>
        </Router> 
      </section>
    );
  }
}
export default AppContainer;