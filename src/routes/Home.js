import React, { useState } from "react";

import { connect } from "react-redux";

import { actionCreators } from "../store"; // ! 얘도 임포트 해와야 한다.

// dispatch 를 home component 에서 사용하지 않는다. 함수를 만들어서 props 로 전달하게 한다.
const Home = (props) => {
  console.log(props);
  //   {history: {…}, location: {…}, match: {…}, staticContext: undefined, toDos: Array(0), …}
  // addToDo: text => {…}
  // history: {length: 5, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
  // location: {pathname: "/", search: "", hash: "", state: undefined}
  // match: {path: "/", url: "/", isExact: true, params: {…}}
  // staticContext: undefined
  // toDos: []
  // __proto__: Object
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // ! 최종, 이제 내 home component 는 직접적으로 dispatch 나 action creators 를 처리할 필요가 없게 된다.
    props.addToDo(text); // 성공적으로 reducer 에게 dispatch 하고 있다.

    setText("");
    // props.dispatch(addToDo(text));
    // ! 이렇게 props 로 받아와서 dispatch 를 날리면? 작동이 된다, 그러나? 이렇게 하는 것 대신 새로운 props 을 받아와 사용해보자.
    // mapDispatchToProps 로 가서 수정해 보자.
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

// ! store.getState() 의 역할, props 로 state 를 받아오는 신박함이란..
const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

// ! 이제 어떻게 하면 component 가 dispatch 동작도 할 수 있을지 살펴보자. 즉 store.dispatch() 의 역할.
// mapDispatchToProps 이것인데 이 아이는 connect 의 second argument 이다.

const mapDispatchToProps = (dispatch, ownProps) => {
  //   console.log(dispatch);
  //   return { dispatch }; // ! 이제 Home Component 의 props 로 불러와서 dispatch 를 할 수 있게 된다.
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  }; // addToDo 라는 function을 만들었다. 얘는 text argument 를 필요로 하고 이 함수가 실행되면서 dispatch 를 호출한다.
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// ! 이 아이는 connect 의 second argument 이다.

// ! export default connect(null, mapDispatchToProps)(Home);
// mapStateToProps 가 필요 없다면 이렇게 null 로 주는 것도 된다고 한다.

// ! console.log(dispatch) 의 모습.
// ƒ dispatch(action) {
//     if (!isPlainObject(action)) {
//       throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
//     }

//     if (typeof action.type === 'unde…
