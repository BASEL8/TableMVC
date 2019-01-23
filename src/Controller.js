import tableView from "./tableView.js";
import todoModel from "./Model.js";
import tableHeadView from "./tableHeadView.js";
const form = document.querySelector("form");
const tableList = document.querySelector(".tableList");
tableHeadView.render(tableList);
const tableBody = document.getElementById("mainTable");
const btn = document.createElement("button");
btn.id = "reset";
btn.appendChild(document.createTextNode("reset"));
tableList.appendChild(btn);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.querySelector("#name");
  const afterName = document.querySelector("#afterName");
  const age = document.querySelector("#age");
  const nameValue = name.value;
  const afterNameValue = afterName.value;
  const ageValue = age.value;
  todoModel.filteredList = [];
  todoModel.addTodo(nameValue, afterNameValue, ageValue);
  if (tableBody.children[1]) {
    tableBody.children[1].remove();
  }
  tableBody.appendChild(tableView.render(todoModel.list));
  name.value = "";
  afterName.value = "";
  age.value = "";
});

//filter
[...document.querySelectorAll(".searchBox button")].map(filterBtn => {
  filterBtn.addEventListener("click", function() {
    if (tableBody.children[1]) {
      tableBody.children[1].remove();
    }
    tableBody.appendChild(
      tableView.render(
        todoModel.addFilter(
          this.parentNode.children[0].value,
          [...this.parentNode.children[0].id].slice(6).join("")
        )
      )
    );
  });
});

document.getElementById("reset").addEventListener("click", function() {
  todoModel.filteredList = [];
  if (tableBody.children[1]) {
    tableBody.children[1].remove();
  }
  tableBody.appendChild(tableView.render(todoModel.list));
});
