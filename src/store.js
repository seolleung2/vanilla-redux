import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = ["initVal"], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

// ! 변경사항을 알려줬던 subscribe, store 를 subscribe 하게끔.
// ! state 에 변화가 생길 때마다 App 을 리렌더 하게끔 하자.
// store 의 변동사항에 대해 subscribe 하려는데.. React-Redux 는 다른 방법을 쓰나?
// store.subscribe();

// ! index.js 에 가서 현재 App 을 연결시킨다. Store 에다가? 일단 gogo

export default store;
