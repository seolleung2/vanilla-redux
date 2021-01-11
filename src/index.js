import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  // ! reducer 함수 두번째 인자에는 action 이 오는데, countModifier 와 소통하기 위한 방법이 바로 action 이라 한다.
  // console.log(count, action); // {type: "@@redux/INIT6.6.l.g.o.8"} 이게 액션이라고?
  // if (action.type === "ADD") {
  //   // console.log("They are telling me to add one");
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  // console.log("there was a change on the store");
  // console.log(countStore.getState());
  number.innerText = countStore.getState();
};

// ! store.subscribe() 의 역할? 그리고 내부 함수.
countStore.subscribe(onChange); // ! store 에 변화가 생길 때 알려주는 역할? 이 function 은 store 에 변화가 있을 때마다 감지해서 불려지게 된다.

// ! countModifier (reducer) 에  action 을 전달하려면? store.dispatch({ key : value }) 를 사용한다.
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// console.log(countStore.getState());
