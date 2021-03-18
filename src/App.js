import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useState } from 'react';

import Tickets from './pages/Tickets/Tickets';
import Overview from './pages/Overview';
import Ideas from './pages/Ideas';

import Sidebar from './containers/Sidebar/Sidebar';

import './assets/styles/main.scss';
import Toolbar from './containers/Toolbar';

class App extends Component {

  constructor() {
    super();

    this.state = {
      activePage: ''
    }

    this.setActivePage = this.setActivePage.bind(this);
  }

  setActivePage(page) {
    this.setState({
      activePage: page
    })
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Sidebar activePage={this.state.activePage} setActivePage={this.setActivePage} />

          <div className="content">
            <Toolbar activePage={this.state.activePage} setActivePage={this.setActivePage} />

            <Switch>
              <Route path="/tickets" component={Tickets} />
              <Route path="/overview" component={Overview} />
              <Route path="/ideas" component={Ideas} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
