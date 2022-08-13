import { handleCreateNewTodo } from "./modules/controller/handleCreateTodo.js";

const submitTodoButton = document.getElementById("submit");
submitTodoButton.addEventListener("click", handleCreateNewTodo);

const arr = ["b", "c", "a", "d"];
const arr2 = [22, 55, 11, 8];

console.log(arr2);
console.log(arr2.sort((a, b) => a - b));

const testArray = null;

testArray && testArray.sort();
testArray?.sort();
