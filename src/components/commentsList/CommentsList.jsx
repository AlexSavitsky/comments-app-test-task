import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/actions";

import SingleComment from "../singleComment/SingleComment";

import "./style.css";

const initState = { id: null, color: "#000000", description: "" };
const CommentsList = () => {
  const [newComment, setNewComment] = useState(initState);
  const { addComment } = useActions();
  const { items } = useSelector((state) => state.items);

  const currentItem =
    items.length > 0 ? items.find((item) => item.current) : null;

  const handleSubmit = (e) => {
    e.preventDefault();

    addComment({
      id: currentItem.id,
      comment: { ...newComment, id: Date.now() },
    });

    setNewComment(initState);
  };

  return (
    <div className="comments-list-container">
      <h1>
        Comments {`#${currentItem ? String(currentItem.id).slice(5) : ""}`}
      </h1>

      <div className="comments-list">
        {currentItem
          ? currentItem.comments.map((comment) => (
              <SingleComment comment={comment} key={comment.id} />
            ))
          : null}
      </div>

      <form
        action=""
        className="comment-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="color"
          className="color-input"
          value={newComment.color}
          onChange={(e) =>
            setNewComment({ ...newComment, color: e.target.value })
          }
        />
        <textarea
          placeholder="Type comment here..."
          className="comment-textarea"
          value={newComment.description}
          onChange={(e) =>
            setNewComment({ ...newComment, description: e.target.value })
          }
          required
        />
        <button className="add-comment-btn"> Add new</button>
      </form>
    </div>
  );
};

export default CommentsList;
