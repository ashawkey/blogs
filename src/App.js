import React from 'react';
import {Switch, Route, Link, HashRouter} from "react-router-dom";
import ScrollToTop from 'react-scroll-up';
import './App.css';

import Home from "./Home"
import Post from "./Post";
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"


function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="header"> 
          <Link to="/"> Hawthorn & key </Link>
          <div className='search-bar'>
            <SearchBar />
          </div>
        </div>
        <div className="content">
          <hr className="fancy-line" />
          <Switch>
            {/* Home page */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* Search page */}
            <Route path="/search/:keyword">
              <SearchResults />
            </Route>
            {/* Post page */}
            <Route path="/archive/:name">
              <Post />
            </Route>
            {/* fallback */}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <hr className="fancy-line" />
        </div>
        <ScrollToTop showUnder={160}>
          <span className="icon icon-circle-up" />
        </ScrollToTop>
        <div className="footer"> 
          @ hawkey
        </div>
      </HashRouter>
    </div>
  );
}

function NoMatch() {
  return (
    <div className="no-match">
      <p> No match! </p>
    </div>
  );
}


export default App;
