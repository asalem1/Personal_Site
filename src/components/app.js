import Blog from './blog';
import Home from './home'
import Navigation from './navbar';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/blog" component={Blog}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
