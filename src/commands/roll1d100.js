const { roll1d100 } = require("../roll");

const roll1d100f = ctx => {
  try {
    const result = roll1d100();
    if (result > 0 && result <= 10) {
      ctx.reply(
        `Твои шансы на провал ничтожно малы (${result}%), празднуй свою победу, раб трупа на троне...`
      );
    } else if (result > 10 && result <= 20) {
      ctx.reply(
        `Впечатляюще, сметный (${result}%), еще немного и мои ты почти догонишь нурглинга в своем изяществе.`
      );
    } else if (result > 20 && result <= 30) {
      ctx.reply(
        `Да, старайся впечатлить темных богов (${result}%), ты же так желаешь их благословеня`
      );
    } else if (result > 30 && result <= 40) {
      ctx.reply(
        `Ничтожная пешка (${result}%), наслаждайся мнимой свободой, пока...`
      );
    } else if (result > 40 && result < 50) {
      ctx.reply(`Бесполезно убегать, (${result}%) ты не сможешь бегать вечно`);
    } else if (result === 50) {
      ctx.reply(`На полпути(${result}%), в могилу...`);
    } else if (result > 50 && result <= 60) {
      ctx.reply(
        `Ты меня разочаровал(${result}%), я думал ты хоть на что-то способен.`
      );
    } else if (result > 60 && result <= 70) {
      ctx.reply(
        `Заурядно (${result}%), где-то между газами нурглита и клешней демонетки...`
      );
    } else if (result > 70 && result <= 80) {
      ctx.reply(
        `Сколько раз тебе нужно умереть что бы ты принял свою судьбу (${result}%)?`
      );
    } else if (result > 80 && result <= 90) {
      ctx.reply(`Дразнишь богов? Ну что же, они тебя тоже (${result}%).`);
    } else if (result > 90 && result < 100) {
      ctx.reply(`А ты любишь играть со смертью, как я посмотрю (${result}%).`);
    } else if (result === 100) {
      ctx.reply(
        `Теперь тебе уже ничего не поможет (${result}%). Хоть умри достойно, насекомое `
      );
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = roll1d100f;
const roll1d100Command = ctx => {
  const result = roll1d100();
  switch (key) {
    case value:
      break;

    default:
      break;
  }
};