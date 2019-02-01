const assert = require("chai").assert;
const expect = require("chai").expect;
const { roll1d100 } = require("../src/roll");

describe("roll tests", function() {
  it("must be a number", function() {
    expect(roll1d100()).to.be.a("number");
  });
});
