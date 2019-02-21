const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WargearSchema = new Schema({
  name: String,
  penetration: Number,
  damage: {
    basic: Number,
    extraDice: Number
  },
  range: Number,
  salvo: Number,
  traits: [String],
  value: {
    number: Number,
    word: String
  },
  keywords: [String]
});

module.exports = Wargear = mongoose.model("wargear", WargearSchema, "wargear");
