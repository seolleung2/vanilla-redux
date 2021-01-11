const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1; // ! 얘만 있으면 실제 number.innerText 에 반영이 되지 않는다.
  updateText(); // ! 그래서 updateText 함수를 새로 만들어서 실제 값을 업데이트 하게 하였다.
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
