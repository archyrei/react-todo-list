import React from "react";
import PropTypes from "prop-types";

const List = ({ children }) => {
  return <section className="list-todo">{children}</section>;
};

List.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default List;
