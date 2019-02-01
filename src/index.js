require("dotenv").config();
const Telegraf = require("telegraf");
const http = require("http");
const cadia = require("./commands/cadia");
const roll = require("./commands/roll");
const roll1d100 = require("./commands/roll1d100");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("Чего ты желаешь, сментрый?"));

bot.help(ctx => {
  ctx.reply("Я Абаддон Разоритель. Чего ты хочешь жалкий смертный? ");
});

bot.command("cadia", cadia);
bot.command("roll", roll);
bot.command("roll1d100", roll1d100);

bot.hears("пидора ответ", ctx =>
  ctx.reply(
    "Считаешь это смешным? Посмотрим как ты посмеешься когда твое очко будет шире очка ужаса..."
  )
);
bot.hears("Хочу павер", ctx => ctx.reply("Вжух и ты демонпринц"));

bot.on("message", ctx => {
  return ctx.reply(
    "Я - Архидьявол, Разоритель Миров, и лже - Император падет от моей руки!"
  );
});
bot.launch();
http.createServer(bot).listen(process.env.PORT || 6000);
setInterval(function() {
  http.get("http://warhammer-log-bot.herokuapp.com");
}, 300000);
