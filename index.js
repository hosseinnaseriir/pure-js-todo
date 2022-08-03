import { handleCreateNewTodo } from "./modules/controller/handleCreateTodo.js";

const submitTodoButton = document.getElementById("submit");
submitTodoButton.addEventListener("click", handleCreateNewTodo);

// const arr = ["abc", "abc2", "abc3"];

// abc,abc2,abc3
// localStorage.setItem("list", arr);

// JavsScriptObjectNotaition

// ["abc","abc2","abc3"]
// localStorage.setItem("list", JSON.stringify(arr));

// const strigfyData = localStorage.getItem("list");
// console.log(strigfyData);
// const parsedData = JSON.parse(strigfyData);
// console.log(parsedData);

// const pesronA = {
//   name: "ali",
// };

// pesronA.name = "mammad";

// const personB = pesronA;

// personB.name = "reza";

// console.log(personB);
// console.log(pesronA);

const name = "ali";
const name2 = "ali2";

const obj = {
  name,
};

const obj2 = {
  name,
};
console.log({ obj, obj2 });

// Math

//            .0 -> 1.0
// console.log(Math.floor(Math.random() * 1000000000));
// const date = new Date();
// console.log(date.getTime());

const array = [100, 200, 300, 400, 500];

// const copyMap = array.map((item) => item * 2);
// console.log(copyMap);
// console.log(array);

const filtredItems = array.filter((item) => item !== 100);
console.log(filtredItems);

const obj0 = {
  name: "ali",
  age: 22,
  isMarried: false,
};

const updatedObj = {
  ...obj0,
  isMarried: true,
};
