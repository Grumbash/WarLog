require("dotenv").config();

const sendTo = ctx => {
  const messageText = ctx.message.text.split("/sendTo")[1];
  ctx.telegram.sendMessage(process.env.GROUP_CHAT_ID, messageText);
};


module.exports = sendTo;
