require("dotenv").config();
const Telegraf = require("telegraf");
const Telegram = require("telegraf/telegram");

const bot = new Telegraf(process.env.BOT_TOKEN);
const telegram = new Telegram(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("Чего ты желаешь, сментрый?"));

bot.help(ctx => {
  ctx.reply("Я Абаддон Разоритель. Чего ты хочешь жалкий смертный? ");
});

bot.command("cadia", ctx => {
  ctx.reply("Кадия пала, как и падет Империум!");
});

bot.hears("пидора ответ", ctx =>
  ctx.reply(
    "Считаешь это смешным? Посмотрим как ты посмеешься когда твое очко будет шире очка ужаса..."
  )
);

bot.on("message", ctx => {
  return ctx.reply(
    "Я - Архидьявол, Разоритель Миров, и лже - Император падет от моей руки!"
  );
});
bot.launch();
