const fetchData = require("./async");

it("should return correct todo", async () => {
    const todo = await fetchData(1);
    //PASS
    expect(todo.id).toBe(1);
});

//FAIL - Doesn't have async and await for the data
// it("should return correct todo", () => {
//   const todo = fetchData(1);
//   expect(todo.id).toBe(1);
// });