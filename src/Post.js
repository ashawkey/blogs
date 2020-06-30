import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {API_ROOT} from "./const";
import MarkdownRender from "./Markdown"
import Comments from "./Comments"
import "./Post.css"


function Post(){
  // load post by {id}
  let {name} = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch(API_ROOT+"/get_blogs_content?name="+name).then(
      res => res.json()
    ).then(
      res => {
        setContent(res[0]);
        setLoading(false);
      }
    );
  }, [name]);

  if (loading) {
    return (
      <div className="loading">
        <span className="icon icon-hour-glass" />
      </div>
    );
  }

  return (
      <div className="post">
        <MarkdownRender source={content} />
        <hr className="fancy-line" />
        <Comments />
      </div>
  );
}

export default Post;