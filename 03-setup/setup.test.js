let animals = ["elephant", "zebra", "bear", "tiger"];

//will run the code before any test starts once
beforeAll(() => {
  console.log("Before all");
});

//will run the code before each test is done
beforeEach(() => {
  animals = ["elephant", "zebra", "bear", "tiger"];
});

//will run the code after each test is done
afterEach(() => {
  console.log("After each");
});

describe("animals array", () => {
  //will run for only this set of tests
  beforeEach(() => {
    animals = ["elephant", "zebra", "bear", "tiger"];
  });

  it("should add animal to end of the array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });

  it("should add animal to beginning of the array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  //PASS
  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });

  //FAIL - If doesn't have beforeEach to reset the array because
  //       the previous test alter the array to have a length of 6
  // it("should have initial length of 4", () => {
  //   expect(animals.length).toBe(4);
  // });
});

describe("testing something(not the animals array)", () => {
  it("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
