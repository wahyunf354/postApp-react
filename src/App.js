import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BLogPost from './BlogPost/BlogPost';
import FormAddPost from './FormAddPost/FormAddPost';
import FormUpdate from './FormUpdate/FormUpdate';

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
        <Route path="/update/:id" component={FormUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
