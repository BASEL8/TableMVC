(function () {
  'use strict';

  var tableView = {
    render: function(objectArray) {
      //let tbl = document.getElementById("mainTable");
      let tbdy = document.createElement("tbody");
      let tr = document.createElement("tr");
      objectArray.forEach(object => {
        let tr = document.createElement("tr");
        for (const key in object) {
          if (object.hasOwnProperty(key)) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(object[key]));
            tr.appendChild(td);
          }
        }
        tbdy.appendChild(tr);
      });
      return tbdy;
    }
  };

  var todoModel = {
    list: [],
    addTodo: function(name, afterName, age) {
      this.list.push({ name: name, efterName: afterName, age: age });
    },
    addFilter: function(value, colName) {
      if (this.arr.length == 0) {
        this.list.filter(i => {
          if (i[colName] === value) {
            this.arr.push(i);
          }
        });
        return this.arr;
      } else {
        return this.arr.reduce((i, b) => {
          if (b[colName] === value) {
            i.push(b);
          }
          return i;
        }, []);
      }
    },
    arr: []
  };

  var tableHeadView = {
    render: function(target) {
      let tbl = document.createElement("table");
      tbl.id = "mainTable";
      let thead = document.createElement("thead");
      let thr = document.createElement("tr");
      ["name", "efterName", "age"].map(fieldTitle => {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(fieldTitle));
        let input = document.createElement("input");
        input.id = "Filter" + fieldTitle;
        let btn = document.createElement("button");
        btn.appendChild(document.createTextNode("Search"));
        let div = document.createElement("div");
        div.appendChild(input);
        div.appendChild(btn);
        div.classList += "searchBox";
        th.appendChild(div);
        thr.appendChild(th);
      });
      thead.appendChild(thr);
      tbl.appendChild(thead);
      target.appendChild(tbl);
    }
  };

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
    todoModel.arr = [];
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
    todoModel.arr = [];
    if (tableBody.children[1]) {
      tableBody.children[1].remove();
    }
    tableBody.appendChild(tableView.render(todoModel.list));
  });

}());
