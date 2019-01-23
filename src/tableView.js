export default {
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
