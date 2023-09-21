import React from "react";
import { useActions } from "../../hooks/actions";

import "./style.css";

const SingleItem = ({ item }) => {
  const { removeItem, changeCurrent } = useActions();
  const { id, title, comments, current } = item;

  return (
    <li
      className={`item ${current && "active-item"}`}
      onClick={() => {
        changeCurrent(id);
      }}
    >
      {title}
      <span className="badge">{comments.length}</span>
      <button className="delete-item-btn" onClick={() => removeItem(id)}>
        Delete
      </button>
    </li>
  );
};

export default SingleItem;
