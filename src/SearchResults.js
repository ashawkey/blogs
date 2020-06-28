import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {API_ROOT} from "./const";
import Flow from "./Flow"


function SearchResults(){
  let {keyword} = useParams();
  const [results, setResults] = useState([]);

  useEffect(()=>{
    fetch(API_ROOT+"/search_blogs_content?keyword="+keyword).then(
        res => res.json()
      ).then(
        res => {
          setResults(res);
        }
      )
  }, [keyword]);

  return (
      <div className="search-results">
        <Flow meta={results} />
      </div>
  );
}

export default SearchResults;