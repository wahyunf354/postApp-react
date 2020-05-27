import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BLogPost from './BlogPost/BlogPost';
import FormAddPost from './FormAddPost/FormAddPost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <BLogPost />
        </Route>
        <Route path='/add'>
          <FormAddPost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
