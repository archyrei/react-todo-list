import React from "react";
import "./styles.css";

import Paper from "./components/paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn dark">Add</button>
        <h2 className="header-title">to-do list</h2>
        <button className="header-btn another-blue">Clear</button>
      </section>
      <section className="add">
        <form className="add-form">
          <input type="text" className="add-input dark" />
          <button className="add-btn">Add</button>
        </form>
      </section>
      <section className="list-todo">
        <div className="todo">
          <span className="todo-text">Brewing Kopi</span>
        </div>
        <div className="todo">
          <span className="todo-text">Brewing kopi</span>
        </div>
        <div className="todo">
          <span className="todo-text">Brewing kopi</span>
        </div>
      </section>
    </Paper>
  );
}
