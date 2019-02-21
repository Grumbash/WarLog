const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String,
  desc: String,
  threat: {
    rank: Number,
    level: String
  },
  keywords: [String],
  size: {
    number: Number,
    word: String
  },
  skills: [
    {
      name: String,
      level: Number
    }
  ],
  characteristics: [
    {
      name: String,
      level: Number
    }
  ],
  traits: [
    {
      name: String,
      level: Number
    }
  ],
  wargear: [{ type: "ObjectId", ref: "wargear" }],
  additionInfo: String,
  specialAbilities: [
    {
      name: String,
      desc: String
    }
  ]
});

module.exports = Character = mongoose.model(
  "characters",
  CharacterSchema,
  "characters"
);
