import React, { useState } from "react";
import PropTypes from "prop-types";

const AddForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("No Todo");
      return;
    }

    alert(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input dark"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="add-btn">Add</button>
      </form>
    </section>
  );
};

AddForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddForm;
