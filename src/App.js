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

function App() {

  const [activePage, setActivePage] = useState('');

  return (
    <Router>
      <div className="App">
        <Sidebar activePage={activePage} setActivePage={setActivePage}/>
        
        <div className="content">
          <Toolbar activePage={activePage} setActivePage={setActivePage}/>

          <Switch>
            <Route path="/tickets" component={Tickets}/>
            <Route path="/overview" component={Overview}/>
            <Route path="/ideas" component={Ideas}/>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
