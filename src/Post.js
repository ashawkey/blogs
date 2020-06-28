import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {API_ROOT} from "./const";
import MarkdownRender from "./Markdown"
import "./Post.css"


function Post(){
  // load post by {id}
  let {name} = useParams();
  const [content, setContent] = useState("");

  useEffect(()=>{
    fetch(API_ROOT+"/get_blogs_content?name="+name).then(
      res => res.json()
    ).then(
      res => {
        setContent(res['body']);
      }
    );
  });

  return (
      <div className="post">
        <MarkdownRender source={content} />
      </div>
  );
}

export default Post;