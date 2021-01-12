import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(text);
    const li = document.createElement("li");
    const ul = document.querySelector("ul");

    li.innerText = text;
    ul.appendChild(li);

    setText("");
  };
  return (
    <>
      <h1>Something To Do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
};

export default Home;
