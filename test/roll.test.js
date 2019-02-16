const assert = require("chai").assert;
const expect = require("chai").expect;
const { roll1d100 } = require("../src/roll");

describe("roll tests", () => {
  it("must be a number", () => {
    expect(roll1d100()).to.be.a("number");
  });
  it("must return a number between 1 to 100", () => {
    expect(roll1d100()).to.be.within(1, 100);

    expect(roll1d100()).to.be.not.within(101, 1000);
  });
});
