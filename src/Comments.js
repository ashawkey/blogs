import React, {useState, useEffect, useCallback} from 'react';
import {useParams} from "react-router-dom";

import {API_ROOT} from "./const";
import "./Comments.css"
import {convertTime} from './utils'

  
function CommentItem(props) {
  // hold single post
  return (
    <div className="comment-item">
      <span className="user">
        {props.value[1]}
      </span>
      <span className="date"> 
        {convertTime(props.value[0])} 
      </span>
      <br/>
      <span className="content">
        {props.value[2]}
      </span>
    </div>
  );
}


function CommentForm(props) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  function handleNameChange(event) {
    setName(event.target.value); // here event.target is <input>
  }

  function handleCommentChange(event) {
    setComment(event.target.value); // here event.target is <input>
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name ==='') {
      alert("Name must not be null.");
      return;
    }
    if (comment === '') {
      alert("Comment must not be null.");
      return;
    }
    let formData = new FormData();
    formData.append('title', props.title);
    formData.append('name', name);
    formData.append('body', comment);

    fetch(API_ROOT+"/post_comment", {
      method: "POST",
      body: formData,
    }).then(
      res => res.json()
    ).catch(
      (e) => {
        console.error(e);
        alert("Error, comment failed.")
      }
    ).then(
      res => {
        setName('');
        setComment('');
        props.refresh();
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="inputarea">
        <textarea value={comment} placeholder="Comment" onChange={handleCommentChange} />
        <input type="text" value={name} placeholder="Name" onChange={handleNameChange} />
      </div>
      <button type="submit">
        <span className="icon icon-compass" />
      </button>
    </form>
  )
}

function Comments(){
  const [meta, setMeta] = useState([]);
  let {name} = useParams();

  const load_comments = useCallback(()=>{
    fetch(API_ROOT+"/get_blogs_comments?name="+name).then(
      res => res.json()
    ).then(
      res => {
        setMeta(res);
      }
    );
  }, [name])

  useEffect(()=>load_comments(), [load_comments]);

  return (
      <div className="comments">
        {/* Comments */}
        {meta.map((value, index) => (
          <CommentItem value={value} key={index} />
        ))}
        {/* Insert Form */}
        <hr className="fancy-line" />
        <CommentForm title={name} refresh={load_comments}/>
      </div>
  );
}

export default Comments;