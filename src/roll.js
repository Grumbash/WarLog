function getRandomInt(max, min = 1) {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  return result;
}

exports.roll1d100 = () => {
  return Math.round(Math.random() * 100);
};

exports.roll = (count, dice) => {
  const arr = [];
  for (let index = 0; index < count; index++) {
    arr.push(getRandomInt(+dice));
  }
  return arr;
};
