import React, { Component } from 'react';
import './App.css';
import Homes from './page/Home'
import Books from './page/Book'
import Authors from './page/Author'
import BookPosts from './page/BookPost'

import { Route, Switch } from 'react-router-dom'
import AuthorPosts from './page/AuthorPost';
import BookPuts from './page/BookPut';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Homes} />
          <Route path="/book" exact component={Books} />
          <Route path="/author" exact component={Authors} />
          <Route path="/bookpost" component={BookPosts} />
          <Route path="/authorpost" component={AuthorPosts} />
          <Route path="/bookedit" component={BookPuts} />
        </Switch>
      </div>
    );
  }
}

export default App;
