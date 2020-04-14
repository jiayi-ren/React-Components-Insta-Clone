// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = props => {

  return (
    <div className="comment-text">
      <span className="user">{props.props.username}</span>
      {' '}
      <span className="comment">{props.props.text}</span>
    </div>
  );
};


export default Comment;
