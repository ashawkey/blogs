import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import ScrollToTop from 'react-scroll-up';
import './App.css';
import {API_ROOT} from "./const";

import Flow from "./Flow";
import Post from "./Post";
import SearchResults from "./SearchResults"


function SearchBar() {
  // history must be inside router. This component has to be extracted out to work!
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  function handleChange(event) {
    setKeyword(event.target.value); // here event.target is <input>
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/blogs/search/"+keyword);
    setKeyword('') // clear input
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={keyword} placeholder="Search" onChange={handleChange}/>
    </form>
  )
}

function App() {
  
  const [meta, setMeta] = useState([]);

  // fetch all blogs' information
  useEffect(()=>{
    // Mount & Update
    fetch(API_ROOT+"/get_blogs_meta").then(
      res => res.json()
    ).then(
      res => {
        setMeta(res);
      }
    );
  }, []); // never update

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
              <Flow meta={meta}/>
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
          <span className="icon icon-arrow-up2" />
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
