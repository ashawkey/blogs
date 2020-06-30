import React, {useState, useEffect} from 'react';

import {API_ROOT} from "./const";
import Flow from "./Flow"

function Home(){
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch all blogs' information
  useEffect(()=>{
    // Mount & Update
    fetch(API_ROOT+"/get_blogs_meta").then(
      res => res.json()
    ).then(
      res => {
        setMeta(res);
        setLoading(false);
      }
    );
  }, []); // never update

  if (loading) {
    return (
      <div className="loading">
        <span className="icon icon-hour-glass" />
      </div>
    );
  }

  return (
    <div className="Home">
      <Flow meta={meta} />
    </div>
  );
}

export default Home;