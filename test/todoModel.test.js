import assert from "assert";
import model from "../src/Model.js";

describe("Table", function() {
  afterEach(function() {
    model.list = [];
  });

  it("Can add to table", function() {
    assert.equal(model.list.length, 0);
    model.addTodo("basel", "munawwar", "34");
    assert.equal(model.list.length, 1);
    assert.deepEqual(model.list[0], {
      name: "basel",
      efterName: "munawwar",
      age: "34"
    });
  });
  it("Can filter the list array", function() {
    model.addTodo("basel", "munawwar", "34");
    model.addTodo("name", "efterName", "34");
    model.addTodo("name", "test", "test");
    assert.deepEqual(model.addFilter("name", "name"), [
      model.list[1],
      model.list[2]
    ]);
  });
  it("Can dubble filter the list array", function() {
    model.addTodo("basel", "munawwar", "34");
    model.addTodo("name", "efterName", "34");
    model.addTodo("name", "test", "test");
    assert.deepEqual(model.addFilter("name", "name"), [
      model.list[1],
      model.list[2]
    ]);
    assert.deepEqual(model.addFilter("test", "efterName"), [model.list[2]]);
  });
});
