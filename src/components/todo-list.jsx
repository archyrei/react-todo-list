import React from "react";
import PropTypes from "prop-types";
import Item from "../layout/item";

const List = ({ acts }) => {
  return (
    <section className="list-todo">
      {acts.map(act => {
        return <Item text={act.text} />;
      })}
    </section>
  );
};

List.propTypes = {
  acts: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default List;
