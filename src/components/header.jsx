import React from "react";

const Header = () => {
  return (
    <section className="header">
      <button className="header-btn dark">Add</button>
      <h2 className="header-title">to-do list</h2>
      <button className="header-btn another-blue">Clear</button>
    </section>
  );
};

export default Header;
