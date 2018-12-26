import React, { Component } from 'react';
import './App.css';
import Homes from './page/Home'
import Books from './page/Book'
import Authors from './page/Author'

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Homes} />
          <Route path="/books" exact component={Books} />
          <Route path="/authors" component={Authors} />
        </Switch>
      </div>
    );
  }
}

export default App;
