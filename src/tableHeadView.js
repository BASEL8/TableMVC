export default {
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
