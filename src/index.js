import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const countModifier = (count = 0, action) => {
  // ! reducer 함수 두번째 인자에는 action 이 오는데, countModifier 와 소통하기 위한 방법이 바로 action 이라 한다.
  // console.log(count, action); // {type: "@@redux/INIT6.6.l.g.o.8"} 이게 액션이라고?
  if (action.type === "ADD") {
    // console.log("They are telling me to add one");
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);

// console.log(countStore.getState());

// ! 어떻게 count modifier 에게 action 을 보낼 수 있을까? (reducer 와 소통하기 위한 방법: action)
// action should be an object.
countStore.dispatch({ type: "ADD" }); // ! dispatch 를 통해 countModifier 로 메세지를 보내는 거다.
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());
