const addForm = document.querySelector(".addform");
const listOfTodos = document.querySelector(".todolist");
const quoteForTodo = document.querySelector(".quote");
const searchForm = document.querySelector(".searchform input");
const addNewTodo = (todo) => {
  //   console.log(listOfTodos.innerHTML);
  const htmlTag = `<li class="list-group-item d-flex justify-content-between align-items-center">${todo}<i class="fa fa-trash deleteicon" aria-hidden="true"></i></li>`;
  listOfTodos.innerHTML += htmlTag;
  addForm.reset();
  addForm.add.blur();
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = addForm.add.value.trim();
  if (newTodo.length) {
    addNewTodo(newTodo);
  }
  if (listOfTodos.childElementCount) {
    quoteForTodo.style.display = "none";
  }
});

//deleting todos
listOfTodos.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteicon")) {
    e.target.parentElement.remove();
  }

  if (!listOfTodos.childElementCount) {
    quoteForTodo.style.display = "";
  }
  //   console.log(listOfTodos.childElementCount);
});

// console.log(searchForm.value);

const search = (term) => {
  // console.log(term);
  // console.log(listOfTodos.children);
  // console.log(
  //   Array.from(listOfTodos.children).filter((todo) => {
  //     return todo.innerText.toLowerCase().includes(term);
  //   })
  // );
  Array.from(listOfTodos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(listOfTodos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

searchForm.addEventListener("keyup", () => {
  // console.log(e.target.value);
  // console.log(searchForm.value.trim().toLowerCase());
  const term = searchForm.value.trim().toLowerCase();
  // console.log(term);
  search(term);
});
