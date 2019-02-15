require("dotenv").config();
const Telegraf = require("telegraf");
const http = require("http");
const mongoose = require("mongoose");
const CronJob = require("cron").CronJob;

const cadia = require("./controllers/cadia");
const roll = require("./controllers/rolls/roll");
const {
  roll1d4,
  roll1d6,
  roll1d8,
  roll1d10,
  roll1d12,
  roll1d20,
  roll1d66,
  roll1d100
} = require("./controllers/rolls/rollClassic");
const resp = require("./response");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("Чего ты желаешь, смертный?"));

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

bot.help(ctx => {
  ctx.reply("Я Абаддон Разоритель. Чего ты хочешь жалкий смертный? ");
});

bot.command("cadia", cadia);
bot.command("roll", roll);
bot.command("roll1d4", roll1d4);
bot.command("roll1d6", roll1d6);
bot.command("roll1d8", roll1d8);
bot.command("roll1d10", roll1d10);
bot.command("roll1d12", roll1d12);
bot.command("roll1d20", roll1d20);
bot.command("roll1d66", roll1d66);
bot.command("roll1d100", roll1d100);

bot.hears("нет", ctx => ctx.reply("Слаанешита ответ!"));

bot.hears("Нет", ctx => ctx.reply("Слаанешита ответ!"));

bot.hears("Хочу павер", ctx => ctx.reply("Вжух и ты демонпринц"));

bot.on("message", ctx => {
  const { first_name, last_name, username } = ctx.message.from;
  const { text, date } = ctx.message;
  console.log({ first_name, last_name, username, text, date });
});

const job = new CronJob("00 29 14 15 1 *", function() {
  bot.telegram.sendMessage(
    -1001375734236,
    "У меня есть для вас сообщение от генерала Анкая: “Вы моя элита, вы мой щит и мой меч.Вы были избраны для этого задания самим верховным правителем Абаддоном и он лично поручил мне распорядиться вами по достоинству.Вам предстоит нелегкий путь перевоплощений, обманов и кознь, но вы справитесь, вы были созданы для этого.Вам нужно убить жреца кабала Путракса и привести мне эту ведьму — Асгорху.Путь ваш будет невыносимо сложен, а в прочем вы и сами знаете.P.S. Гидра Доминатус!”"
  );
});

job.start();

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
