require("dotenv").config();
const Telegraf = require("telegraf");
const http = require("http");

const cadia = require("./commands/cadia");
const roll = require("./commands/roll");
const roll1d100 = require("./commands/roll1d100");
const {
  roll1d4,
  roll1d6,
  roll1d8,
  roll1d10,
  roll1d12,
  roll1d20,
  roll1d66
} = require("./roll");
const resp = require("./response");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("Чего ты желаешь, смертный?"));

bot.help(ctx => {
  ctx.reply("Я Абаддон Разоритель. Чего ты хочешь жалкий смертный? ");
});

bot.command("cadia", cadia);
bot.command("roll", roll);
bot.command("roll1d4", ctx => {
  const result = roll1d4();
  ctx.reply(`Твой бог под номером: ${result}. Хотя какая тебе разница?`);
});
bot.command("roll1d6", ctx => {
  const result = roll1d6();
  ctx.reply(`Твой результат: ${result}`);
});
bot.command("roll1d8", ctx => {
  const result = roll1d8();
  ctx.reply(`Люблю эти восьмерки, а ты получаешь: ${result}`);
});
bot.command("roll1d10", ctx => {
  const result = roll1d10();
  ctx.reply(`Я бы скзал: ${result}`);
});
bot.command("roll1d12", ctx => {
  const result = roll1d12();
  ctx.reply(`Около: ${result}`);
});
bot.command("roll1d20", ctx => {
  const result = roll1d20();
  ctx.reply(`Твой легион: ${result}`);
});
bot.command("roll1d66", ctx => {
  const result = roll1d66();
  ctx.reply(`Ты страдаешь от: ${result}`);
});
bot.command("roll1d100", roll1d100);

bot.hears("пидора ответ", ctx =>
  ctx.reply(
    "Считаешь это смешным? Посмотрим как ты посмеешься когда твое очко будет шире очка ужаса..."
  )
);
bot.hears("Хочу павер", ctx => ctx.reply("Вжух и ты демонпринц"));

bot.launch();
http.createServer(resp).listen(process.env.PORT || 3000, err => {
  if (err) {
    return console.error(err);
  }
  console.log(`server is listening on ${process.env.PORT}`);
});
setInterval(function() {
  http.get("http://warhammer-log-bot.herokuapp.com");
}, 300000);
