import React, {Component, useEffect, useContext, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import apiKey from './config';
import axios from 'axios';

import Home from './components/Home';
import Nav from './components/Nav';

import Context from './context';

class App extends Component {

  constructor() {
    super();
    this.state={
      searchResults: {}
    }
  }

  //Helper Functions
    async performSearch(searchTerm) {
      try {
        let results = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1&per_page=24&sort=relevance`)
        // results = results.data;
        this.setState({
          searchResults: results.data
        });
        console.log('This is the results log', results.data)
      } catch (err) {
        console.log(err)
      }
  }
    
  componentDidMount() {
    this.performSearch('orioles');
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route />
            <Route />
            <Route />
            <Route /> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;