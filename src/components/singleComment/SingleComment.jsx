import React from "react";

import "./style.css";

const SingleComment = ({ comment }) => {
  const { color, description } = comment;

  return (
    <div className="single-comment">
      <div className="comment-color" style={{ backgroundColor: color }}></div>
      <div className="comment-body">{description}</div>
    </div>
  );
};

export default SingleComment;
