export default {
  list: [],
  filteredList: [],
  addTodo: function(name, afterName, age) {
    this.list.push({ name: name, efterName: afterName, age: age });
  },
  addFilter: function(value, colName) {
    let filteredList = [];
    if (this.filteredList.length == 0) {
      this.list.filter(i => {
        if (i[colName] === value) {
          this.filteredList.push(i);
        }
      });
      return this.filteredList;
    } else {
      return this.filteredList.reduce((i, b) => {
        if (b[colName] === value) {
          i.push(b);
        }
        return i;
      }, []);
    }
  }
};
