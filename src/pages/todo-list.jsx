import React from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import AddForm from "../components/form";
import List from "../components/todo-list";

const TodoList = () => {
  return (
    <Paper>
      <Header />
      <AddForm />
      <List />
    </Paper>
  );
};

export default TodoList;
