import React, {useEffect, useContext, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer'

import Context from './context';

function App() {
  const context = useContext(Context)

  //Helper Functions
    useEffect(() => {
      context.performSearch('orioles')
    }, [])

  return(
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/orioles" render={() => <PhotoContainer data={context.orioles} />} />
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