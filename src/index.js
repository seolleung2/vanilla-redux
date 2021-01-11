import { createStore } from "redux"; // store 는 나의 data 를 넣는 곳이다. 나의 state 에 대한.
// ! createStore 가 하는 일은 기본적으로 나의 data 를 넣을 수 있는 장소를 생성한다.
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// ! 뭐든지 modifier, reducer 가 리턴하는 건 나의 app data 가 된다. state 를 수정할 수 있는 함수는 이게 유일하다.
const countModifier = (state = 0) => {
  console.log(state);
  return state; // reducer 가 리턴하는 것은 나의 app 에 있는 data 가 된다.
}; // ! store 를 만들기 위해서는 reducer 가 필요하다고 한다.
const countStore = createStore(countModifier); // Error: Expected the reducer to be a function. 아 안에 reducer 함수를 넣어줘야 하나보구만..

// reducer (countModifier) 는 나의 state data 를 수정하는 (modify) 함수이다. count 를 올리거나 내리거나 하는 등의..

console.log(countStore);

// {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}

console.log(countStore.getState());

// Let s Count Number! 가 출력된다.

// ! state 는 현재 application 에서 변하는 data 를 의미한다. 여기서는 뭐가 state 인가?
// let count = 0; // 바로 이것! count! 현재 app 에서 유일하게 바뀌는 코드.

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count; // ! html 에게 count 를 업데이트 하라고 알려주고 있다.
// };

// // count 를 수정하기 위해 handleAdd, handleMinus 함수를 작성했잖은가.
// const handleAdd = () => {
//   count = count + 1; // ! 얘만 있으면 실제 number.innerText 에 반영이 되지 않는다.
//   updateText(); // ! 그래서 updateText 함수를 새로 만들어서 실제 값을 업데이트 하게 하였다.
// };

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
