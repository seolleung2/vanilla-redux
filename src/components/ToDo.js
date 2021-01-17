import React from "react";

import { connect } from "react-redux"; // ! import
import { actionCreators } from "../store"; // ! import

const ToDo = (props) => {
  console.log(props); // ? {text: "hi", id: 1610862445794, onBtnClick: ƒ}
  return (
    <li>
      {props.text} <button onClick={props.onBtnClick}>DEL</button>
    </li>
  );
};

// ? 어떤 방법으로 dispatch 동작에 접근 하는가?
// ! ToDo Component 는 오로지 dispatch 만 신경쓴다. reducer 에 action handler 함수를 보내서
// ! 그 중 deleteToDo 를 보내서 reducer 에서 실제 상태를 지우게 변경하도록 만드는 거지!
// ? 그래서 우리는 mapStateToProps, mapDispatchToProps 중에서, mapDispatchToProps 를 쓸 것이다. 바로 이 컴포넌트에!
// ? 왜냐하면 우리는 ToDo 에서 reducer 에게 메시지를 보내기 원하기 때문이다.
// ? ToDo Component 에서는 state 에 대해서는 신경쓰지 않는다.

// ownProps, 우리가 어떤 것을 받는지 기억하기 위해 console.log 만 해보자.
// ! ownProps 는 {text: "hello", id: 1610862082393} 를 받아오는구나!
const mapDispatchToProps = (dispatch, ownProps) => {
  //   console.log(ownProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};

// ! 이렇게 해줌으로써 ToDo Component 에 props 로 onBtnClick 가 들어간다!

export default connect(null, mapDispatchToProps)(ToDo);
