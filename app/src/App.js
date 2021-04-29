import React, {useEffect, useContext, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import apiKey from './config';
import axios from 'axios';

import Home from './components/Home';
import Nav from './components/Nav';

import Context from './context';

function App() {
  const context = useContext(Context)

  //Establishing state
  const [orioles, setOrioles] = useState({});
  const [searchResults, setSearchResults] = useState({});

  //Helper Functions
    async function performSearch(searchTerm) {
      try {
        let results = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1&per_page=24&sort=relevance`)
        // results = results.data;
        setSearchResults(results.data)
        console.log('This is the results log', results.data)
        console.log('This is the searchResults log', searchResults)
      } catch (err) {
        console.log(err)
      }
  }

    useEffect(() => {
      // const performSearch = async (searchTerm) => {
      //   const results = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&format=json&nojsoncallback=1&per_page=24&sort=relevance`);
      //   setSearchResults(results.data);
      // }
      performSearch('orioles')
      console.log('This is the useEffect log', searchResults)
    }, [])

    // //testing with other API
    // useEffect(() => {
    //   const performSearch = async () => {
    //     const results = await axios(`https://randomuser.me/api/?results=12&nat=us`);
    //     setSearchResults(results.data);
    //   }
    //   performSearch()
    //   console.log(searchResults)
    //   console.log('test')
    // }, [])
    

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

export default App;