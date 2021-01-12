import { createStore } from "redux"; // yarn add 로 다운받은 redux 에서 createStore 를 불러옴.

// index.html 에 만들어놓은 요소들을 DOM 으로 선택
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 문자열을 변수로 관리하는 이유?
// 1. 나중에 프로젝트가 커질 시 중복되는 변수를 예방하기 위해,
// 2. 오타가 났을 때 에러를 빠르게 잡아 내기 위함.
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// ! action creator addToDo, it only returns object
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

// ! action creator deleteToDo, it only returns object
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// ! initial state 는 빈 배열로 할당해 주었다. 기존 상태는 immutable 이다.

// const initialState = { values : []} 와 같이 지정해 주기도 한다.
const reducer = (state = [], action) => {
  // console.log(state, action);
  switch (action.type) {
    case ADD_TODO: // 기존 객체 의 내용 + 새로운 객체 (text 와 id 키를 담은) 를 합친 배열을 리턴하게!
      return [...state, { text: action.text, id: Date.now() }]; // ! 이 때의 id 의 value 는 정수형 이다.
    case DELETE_TODO: // 새로운 배열을 리턴하게 하는 방법은 배열 내장 함수 filter 를 사용하는 방법도 있다.
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer); // ! 상태를 저장하는 store 개설, 하지만 reducer 가 필요하지

// ! store.getState() 를 통해 store 내 state 의 변경사항 을 가져 올 수 있다.
// ! 구독 (subscribe) 을 통해 그 변경사항을 화면 (UI) 에 반영되도록 한다.

// store.subscribe(() => console.log(store.getState()));

// submit button 을 누르면 실행되는 dispatchAddTodo
const dispatchAddTodo = (text) => {
  store.dispatch(addToDo(text)); // reducer 에 action 을 전달!
};

// Del 버튼을 누르면 실행되는 dispatchDeleteToDo
const dispatchDeleteToDo = (e) => {
  // ! html 에서의 id 는 문자열 타입이기에 정수로 변환
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  // console.log(toDos); // [{…}, {…}, {…}]
  // ! paintToDos 를 호출 할 때마다 ul 이 싹 지워졌다가 아래를 실행하게 한다.
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";

    btn.addEventListener("click", dispatchDeleteToDo); // ! 여기 주목

    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

// ! 구독, 스토어의 상태가 바뀔 때마다 알려주는 (실제 화면에 반영되게 하는) 역할을 한다.
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);
