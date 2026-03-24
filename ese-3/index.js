const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

function addProduct() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(" " + taskText));

  ul.appendChild(li);

  input.value = "";
}
