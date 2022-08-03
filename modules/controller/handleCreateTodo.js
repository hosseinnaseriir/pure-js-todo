// query to DOM forgetting elements
const todoTitle = document.getElementById("title");
const todoDesc = document.getElementById("desc");
const mainList = document.getElementById("main");
import { toastify } from "./../components/toastify.js";

const savedLCTodos = localStorage.getItem("todosList");
const parseSavedLCTodos = JSON.parse(savedLCTodos) || [];
let savedTodos = [...parseSavedLCTodos];

const createNewTodo = (title, desc, id, checked) => {
  // create a list item for new todo
  const listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.id = id;
  // listItem.setAttribute("class", "list-item");

  const todoTitleHeading = document.createElement("h3");
  const todoTitleInput = document.createElement("input");
  todoTitleInput.disabled = true;
  todoTitleInput.className = "title-input";
  todoTitleInput.defaultValue = title;
  todoTitleHeading.appendChild(todoTitleInput);
  todoTitleHeading.style.backgroundColor = "orange";
  if (checked) {
    todoTitleHeading.style.backgroundColor = "green";
  }

  const todoDescPara = document.createElement("p");
  todoDescPara.innerHTML = desc;

  // put h3 and p into our listItem
  listItem.appendChild(todoTitleHeading);
  listItem.appendChild(todoDescPara);

  // cretae action buttons for our todo
  const todoActions = `<div>
      <button>DEL</button>
      <button>EDIT</button>
      <button>CHECK</button>
      </div>`;

  //put  action buttons to our listItem
  listItem.innerHTML += todoActions;

  // put our list item into oul main Ul
  mainList.appendChild(listItem);
};

savedTodos.forEach((todo) =>
  createNewTodo(todo.title, todo.desc, todo.id, todo.checked)
);

// handle add new todo
export const handleCreateNewTodo = (event) => {
  // prevent to rernder page by form
  event.preventDefault();

  // validate todo form
  //  undefined or ''
  if (!todoTitle.value)
    return toastify("please enter a valid title ...", {
      time: 1000,
      type: "warn",
    });

  // create an object form todo title and desc
  const newTodo = {
    id: Date.now(),
    title: todoTitle.value,
    desc: todoDesc.value,
    checked: false,
  };

  savedTodos.push(newTodo);
  console.log(savedTodos);

  localStorage.setItem("todosList", JSON.stringify(savedTodos));
  createNewTodo(newTodo.title, newTodo.desc, newTodo.id);
};

mainList.addEventListener("click", (e) => {
  if (e.target.innerText === "DEL") {
    const todoEl = e.target.parentElement.parentElement;
    console.log(todoEl.id);
    const filtredTodos = savedTodos.filter(
      (item) => item.id !== Number(todoEl.id)
    );
    localStorage.setItem("todosList", JSON.stringify(filtredTodos));
    location.reload();
  } else if (e.target.innerText === "CHECK") {
    // get li element
    const todoEl = e.target.parentElement.parentElement;
    // get our todo in localStrage with ID
    const filtredTodo = savedTodos.filter(
      (item) => item.id === Number(todoEl.id)
    );
    // update our todo in localStrage with ID
    const updateFiltredTodo = { ...filtredTodo[0], checked: true };
    // delete our todo from localstorage
    const filtredTodos = savedTodos.filter(
      (item) => item.id !== Number(todoEl.id)
    );
    // update localStorage with updated todo
    const updateSavedTodos = [...filtredTodos, updateFiltredTodo];
    localStorage.setItem("todosList", JSON.stringify(updateSavedTodos));
    location.reload();
  } else if (e.target.innerText === "EDIT") {
    const todoEl = e.target.parentElement.parentElement;
    todoEl.children[0].children[0].disabled = false;
    todoEl.children[0].children[0].select();
    todoEl.children[0].children[0].style.backgroundColor = "blue";
    e.target.innerText = "SAVE";
    e.target.addEventListener("click", () => {
      const filtredTodo = savedTodos.filter(
        (item) => item.id === Number(todoEl.id)
      );
      const updateFiltredTodo = { ...filtredTodo[0], title: todoEl.children[0].children[0].value };

      const filtredTodos = savedTodos.filter(
        (item) => item.id !== Number(todoEl.id)
      );
      const updateSavedTodos = [...filtredTodos, updateFiltredTodo];
      localStorage.setItem("todosList", JSON.stringify(updateSavedTodos));
      location.reload();
    });
  }
});
