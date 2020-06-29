import React from 'react';
import {Link} from "react-router-dom";
import './Flow.css';

function convertTime(timestamp) {
  var date = new Date(timestamp * 1000);
  return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()
}

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
      <Link to={"/blogs/archive/"+props.value[0]} className="title"> 
        {props.value[0].slice(0, -3)} 
      </Link>
      <span className="date"> 
        {convertTime(props.value[1])+" (created at "+convertTime(props.value[2])+")"} 
      </span>
    </div>
  );
}


export default Flow;