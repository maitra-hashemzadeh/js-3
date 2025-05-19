function todoList(todos) {
  // Write your code here...
  const divSelect = document.querySelector("#content");
  const ulList = document.createElement("ul");
  divSelect.append(ulList);
  todos.forEach(({ todo }) => {
    const liList = document.createElement("li");
    liList.textContent = todo;
    ulList.append(liList);
    liList.addEventListener("click", () => {
      liList.classList.toggle("move");
      if (liList.classList.contains("move")) {
        liList.style.textDecorationLine = "line-through";
      } else {
        liList.style.textDecorationLine = "none";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
