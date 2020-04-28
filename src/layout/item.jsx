import React from "react";
import PropTypes from "prop-types";

const Item = props => {
  return (
    <div className="todo">
      <span className="todo-text">{props.text}</span>
    </div>
  );
};

Item.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Item;
