import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Login from './components/Login';
import Categories from './components/Categories';
import Nav from './components/layouts/LeftNavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/home/audio' component={Categories} />
          <Route path='/nav' component={Nav} />
          {/* <Route path='/home/video' exact component={Categories} />
          <Route path='/home/ebooks' exact component={Categories} />
          <Route path='/home/training' exact component={Categories} />
          <Route path='/home/dictonary' exact component={Categories} /> */}
        </Switch>
        {/* <Home /> */}

      </div>
    </Router>
  );
}

export default App;
