// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.props.likes)

  return (
    <div className="post-border">
      <PostHeader
        username={props.props.username}
        thumbnailUrl={
          props.props.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.props.imageUrl}
        />
      </div>
      <LikeSection props={likes}/>
      <CommentSection
        postId={props.props.imageUrl}
        comments={props.props.comments}
      />
    </div>
  );
};

export default Post;
