import React from "react";

import Aside from "./components/aside/Aside";
import ItemsList from "./components/itemsList/ItemsList";
import CommentsList from "./components/commentsList/CommentsList";

import "./style.css";

const App = () => {
  return (
    <div className="app-container">
      <Aside />
      <div className="container">
        <main className="main-container">
          <div className="lists-container">
            <ItemsList />
            <CommentsList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
