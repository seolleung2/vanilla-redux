import React, { useState } from "react";

import { connect } from "react-redux"; // ! connect 를 불러옴.

const Home = (props) => {
  console.log(props); // ! 여기서 props 로 받아왔다. App.js 의 react-router 로부터!
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

// ! 현재의 state 를 전달해주는 store.getState()
// ul 태그 안에다가 store 로부터 state 를 가져올 수 있게 해야 한다.
// 그게 바로 connect 라는 것인데, 나의 components 들을 store 에 연결하게 해 준다.
// connect 는 두개의 인자 (state, dispatch) 를 가진다. 둘중에 고를 수 있어서다.

// store 로부터 state 를 가져오게 하는 함수를 만든다.

// redux 공식문서 참조 : mapStateToProps, Redux store 로부터 뭔가를 가지고 오고 싶을 때,
const getCurrentState = (state, ownProps) => {
  // ownProps 는 필요없으니 여기서는 지워도 된다.
  //   console.log(state, ownProps);
  //   return { happy: true };
  //   return { state };
  return { toDos: state };
};

// ["good"] {history: {…}, location: {…}, match: {…}, staticContext: undefined} 이런게 뜨네
// ! firstArgument : redux store 에서 온 디폴트 state. 두번째는 내 컴포넌트의 props (App.js 의 react-router 에서 내려준 props)

// console.log 후에 ⏩ mapStateToProps() in Connect(Home) must return a plain object. Instead received undefined.

// ! return { happy: true }; 로 하고 난 이후 6번째 줄의 console.log 의 변화 감지.
// {history: {…}, location: {…}, match: {…}, staticContext: undefined, happy: true, …}

// ! why? connect() 는 Home 으로 보내는 props 에 추가 될 수 있도록 허용해 준다.
// ! 무엇을 리턴하게 하든 나의 Home component 의 props 에 추가 될 것이다.

// return { state }; 로 변경하니 이제, store 의 state 를 받아오고 있다.. 와 미쳤다.

// ! 마지막으로 function 의 이름은 mapStateToProps 여야 한다는게 국룰.
// Redux state 로부터 Home Component 에 props 로써 전달한다는 의미라한다.
export default connect(getCurrentState)(Home);
