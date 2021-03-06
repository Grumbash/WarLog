require ('dotenv').config ();
const Telegraf = require ('telegraf');
const http = require ('http');
const mongoose = require ('mongoose');

const cadia = require ('./controllers/cadia');
const roll = require ('./controllers/rolls/roll');
const {
  roll1d4,
  roll1d6,
  roll1d8,
  roll1d10,
  roll1d12,
  roll1d20,
  roll1d66,
  roll1d100,
} = require ('./controllers/rolls/rollClassic');
const resp = require ('./response');

const bot = new Telegraf (process.env.BOT_TOKEN);

bot.start (ctx => ctx.reply ('Чего ты желаешь, смертный?'));

mongoose
  .connect (process.env.DB_URL, {useNewUrlParser: true})
  .then (() => console.log ('MongoDB Connected'))
  .catch (err => console.log (err));

bot.help (ctx => {
  ctx.reply ('Я Абаддон Разоритель. Чего ты хочешь жалкий смертный? ');
});

bot.command ('cadia', cadia);
bot.command ('roll', roll);
bot.command ('roll1d4', roll1d4);
bot.command ('roll1d6', roll1d6);
bot.command ('roll1d8', roll1d8);
bot.command ('roll1d10', roll1d10);
bot.command ('roll1d12', roll1d12);
bot.command ('roll1d20', roll1d20);
bot.command ('roll1d66', roll1d66);
bot.command ('roll1d100', roll1d100);

bot.on ('message', ctx => {
  const {first_name, last_name, username} = ctx.message.from;
  const {text, date} = ctx.message;
  console.log ({
    first_name,
    last_name,
    username,
    text,
    date,
    chatId: ctx.message.chat.id,
  });
  if (ctx.message.chat.id === 186151380) {
    const duobleDots = ctx.message.text.split ('')[0];
    if (duobleDots === ':') {
      const re_text = ctx.message.text.slice (1);
      ctx.telegram.sendMessage (process.env.GROUP_CHAT_ID, re_text);
    }
    // ctx.telegram.sendMessage(process.env.GROUP_CHAT_ID, ctx.message.text);
  }
});

bot.launch ();

http.createServer (resp).listen (process.env.PORT || 3000, err => {
  if (err) {
    return console.error (err);
  }
  console.log (`server is listening on ${process.env.PORT}`);
});

setInterval (function () {
  http.get ('http://warhammer-log-bot.herokuapp.com');
}, 300000);
