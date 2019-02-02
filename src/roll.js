const Roll = require("roll");
const rollDice = new Roll();

exports.roll1d4 = () => {
  return rollDice.roll("d4").result;
};

exports.roll1d6 = () => {
  return rollDice.roll("d6").result;
};

exports.roll1d8 = () => {
  return rollDice.roll("d8").result;
};

exports.roll1d10 = () => {
  return rollDice.roll("d10").result;
};

exports.roll1d12 = () => {
  return rollDice.roll("d12").result;
};

exports.roll1d20 = () => {
  return rollDice.roll("d20").result;
};

exports.roll1d66 = () =>
  +rollDice
    .roll("2d6")
    .rolled.map(e => e.toString())
    .reduce((accum, curVal) => accum + curVal);

exports.roll1d100 = () => {
  return rollDice.roll("d%").result;
};

exports.roll = rollDice;
