const { roll } = require("../roll");

const rollCommand = ctx => {
  return ctx.reply("Ответочка из roll");
  const diceRoll = ctx.message.text.trim();
  const arrOfDices = diceRoll.split(" ")[1].split("d");
  const justRoll = 0;
  if (arrOfDices) {
    const dices = arrOfDices.split(" ")[1].split("d");
    const rollResult = roll(dices[0], dices[1]);
    return ctx.reply(rollResult);
  }
  ctx.reply("Ты даже нормально рольнуть не можешь?");
  return ctx.reply(
    `Пиши просьбу в формате "/roll 1d100", а не ${ctx.message.text}`
  );
};

module.exports = rollCommand;
