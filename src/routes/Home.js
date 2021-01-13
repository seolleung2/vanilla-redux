import React, { useState } from "react";

import { connect } from "react-redux";

const Home = (props) => {
  console.log(props);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setText("");
  };
  return (
    <>
      <h1>🐤Something To Do🐤</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(props.toDos)}</ul>
    </>
  );
};

const getCurrentState = (state, ownProps) => {
  return { toDos: state };
};

export default connect(getCurrentState)(Home);
