import React from 'react';

import Home from './components/Home'
import Login from './components/Login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={Home} />
        </Switch>
        {/* <Home /> */}

      </div>
    </Router>
  );
}

export default App;
