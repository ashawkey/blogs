import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ScrollToTop from 'react-scroll-up';
import './App.css';

import Home from "./Home"
import Post from "./Post";
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"


function App() {
  return (
    <div className="App">
      <Router>
        <div className="header"> 
          <Link to="/blogs"> Hawthorn & key </Link>
          <div className='search-bar'>
            <SearchBar />
          </div>
        </div>
        <div className="content">
          <hr className="fancy-line" />
          <Switch>
            {/* Home page */}
            <Route exact path="/blogs">
              <Home />
            </Route>
            {/* Search page */}
            <Route path="/blogs/search/:keyword">
              <SearchResults />
            </Route>
            {/* Post page */}
            <Route path="/blogs/archive/:name">
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
      </Router>
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
