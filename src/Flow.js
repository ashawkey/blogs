import React from 'react';
import {Link} from "react-router-dom";
import './Flow.css';

function Flow(props) {
  return (
    <div className="flow"> 
      {props.meta.map((value, index) => (
        <FlowItem value={value} key={index} />
      ))}
    </div>
  );
}

  
function FlowItem(props) {
  // hold single post
  return (
    <div className="flow-item">
      <Link to={"/blogs/archive/"+props.value['title']} className="title"> 
        {props.value['title'].slice(0, -3)} 
      </Link>
      <span className="date"> 
        {props.value['mtime']+" (created at "+props.value['ctime']+")"} 
      </span>
    </div>
  );
}


export default Flow;