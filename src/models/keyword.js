const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KeyWordSchema = new Schema({
  name: String,
  desc: String
});

module.exports = KeyWord = mongoose.model(
  "keyWords",
  KeyWordSchema,
  "keyWords"
);
