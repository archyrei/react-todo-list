import React from "react";
import "./styles.css";

import Paper from "./components/paper";
import Header from "./components/header";
import AddForm from "./components/form";
import List from "./components/todo-list";
import Item from "./layout/item";

export default function App() {
  return (
    <Paper>
      <Header />
      <AddForm />
      <List>
        <Item />
        <Item />
        <Item />
      </List>
    </Paper>
  );
}
