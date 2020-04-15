// You do not need to do anything in this file
import React, { useState } from 'react';
import Comment from "./Comment";

const CommentInput = props => {


  // const [commentLatest, setCommentLatest] = useState[props.props]
  const [comment, setComment] = useState("")

  const submitComment = event =>{
    event.preventDefault()
    console.log(event)
  }

  const changeComment = event =>{
    console.log(event.target.value)
  }

  const newComment = {
    username: "y",
    text: comment
  }

  return (
    <div>
        <Comment props={newComment}/>
    <form className="comment-form" onSubmit={submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={changeComment}
      />
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
};

export default CommentInput;
