import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useActions } from "../../hooks/actions";

import SingleItem from "../singleItem/SingleItem";

import "./style.css";

const initState = {
  id: null,
  title: "",
  current: false,
  comments: [],
};

const ItemsList = () => {
  const { addItem, changeCurrent } = useActions();
  const { items } = useSelector((state) => state.items);
  const [newItem, setNewItem] = useState(initState);

  useEffect(() => {
    if (items.filter((item) => item.current).length === 0 && items.length > 0) {
      changeCurrent(items[items.length - 1].id);
    }
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    newItem &&
      addItem({
        ...newItem,
        id: Date.now(5),
        current: (items.length === 0) & true,
      });

    setNewItem(initState);
  };

  return (
    <div className="items-list-container">
      <h1>Items</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Type name here..."
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          value={newItem.title}
          required
        />
        <button className="add-item-btn">Add new</button>
      </form>

      <ul className="items-list">
        {items.length > 0 &&
          items.map((item) => <SingleItem item={item} key={item.id} />)}
      </ul>
    </div>
  );
};

export default ItemsList;
