const sum = require("./sum");

describe("example tests", () =>{
  //PASS
  it("should add 1+2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  //PASS
  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
  //PASS
  it("array assignment", () => {
    const array = [];
    expect(array).toEqual([]);
  });
  //FAIL - result and the toBe check value is not the same
  // it("should add 1+2 to equal 3", () => {
  //   const result = sum(1, 2);
  //   expect(result).toBe(7);
  // });
  // //FAIL - toBe method cannot be used for objects
  // it("object assignment", () => {
  //   const obj = {};
  //   expect(obj).toBe({});
  // });
  // //FAIL - toBe method cannot be used for arrays
  // it("array assignment", () => {
  //   const array = [];
  //   expect(array).toBe([]);
  // });
});

describe("truthy or falsy", ()=>{
    it("null", ()=>{
        const n = null;
        //PASS
        expect(n).toBeFalsy();
        //PASS - reverse(.not) of truthy is falsy
        expect(n).not.toBeTruthy();
        //PASS 
        expect(n).toBeNull();
        //PASS - null is not undefined so reverse is correct
        expect(n).not.toBeUndefined();
    });
});

describe("numbers", ()=>{
    it("2 + 2", ()=>{
      const value = 2 + 2;
      //PASS
      expect(value).toBe(4);
      //PASS - >
      expect(value).toBeGreaterThan(3);
      //PASS - >=
      expect(value).toBeGreaterThanOrEqual(4);
      //PASS - <
      expect(value).toBeLessThan(7);
      //PASS - <=
      expect(value).toBeLessThanOrEqual(4);
    });

    it("adding floats", ()=> {
      const value = 0.1 + 0.2;
      //toBeCloseTo checks the difference between actual value and value to check
      //Pass if the difference <0.005
      //PASS
      expect(value).toBeCloseTo(0.3);
      //PASS
      expect(value).toBeCloseTo(0.296);
      //PASS
      expect(value).toBeCloseTo(0.3005);
      //FAIL - because 0.1 + 0.2 = 0.30000004 (not sure why)
      console.log("0.1 + 0.2 = " + value);
      // expect(value).toBe(0.3);
    });
})

describe("strings", ()=>{
    it("there is no I in team", ()=>{
        //PASS
        expect("team").not.toMatch(/I/);
        //PASS
        expect("team").toMatch(/a/);
    })
})

describe("arrays", ()=>{
    const shoppingList = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
    ];
    //PASS
    expect(shoppingList).toContain('milk');
})

function compilesAndroidCode(){
    throw new Error("you are using the wrong JDK");
}

describe("exceptions", ()=>{
    it("compiling android goes as expected", ()=>{
        //toThrow takes in a function and if the function throws an error then it will pass
        //also can match using the error message contained 
        //PASS
        expect(()=> {compilesAndroidCode()}).toThrow();
        //PASS
        expect(()=> {compilesAndroidCode()}).toThrow(Error);
        //PASS
        expect(()=> {compilesAndroidCode()}).toThrow("you are using the wrong JDK");
    })
})