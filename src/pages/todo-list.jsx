import React, { useState } from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import AddForm from "../components/form";
import List from "../components/todo-list";

const TodoList = () => {
  const [acts, setActs] = useState([
    { text: "learning react" },
    { text: "learning how to make milk base coffee in home" }
  ]);

  return (
    <Paper>
      <Header />
      <AddForm />
      <List acts={acts} />
    </Paper>
  );
};

export default TodoList;
