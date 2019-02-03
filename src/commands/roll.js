const { roll } = require("../roll");

const rollCommand = ctx => {
  try {
    const diceRoll = ctx.message.text.trim();
    const rollRequest = diceRoll.split(" ")[1];
    if (roll.validate(rollRequest)) {
      const result = roll.roll(rollRequest);
      return ctx.reply(`Твои кости показывают: ${result.rolled
        .map(elem => "(" + elem + ")")
        .toString()
        .replace(/,/g, " ")}.\nВ итоге: ${result.result}
        `);
    }

    ctx.reply("Твой интеллект не позволяет тебе написать просьбу правильно?");

    ctx.reply(
      `Пиши в формате — /roll "число кубов"d"число граней" (/roll 1d100, например), а не ${
        ctx.message.text
      }`
    );
  } catch (error) {
    console.error(error);
    return new Error(error);
  }
};

module.exports = rollCommand;
