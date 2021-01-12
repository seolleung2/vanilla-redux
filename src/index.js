import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// ! Redux 의 store 에 나의 Application 을 연결하기 위한 방법 => Provider
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// Provider 로 <App/> 을 감싸 주고,
// Provider 는 store 가 필요하다.

// ! index.js 에 Provider 를 불러와 내 앱을 연결함으로써 얻는 이점이 무엇이 있을까?
