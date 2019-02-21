const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const warpDangersSchema = new Schema({
  roll: [Number],
  name: String,
  desc: String
});

module.exports = WarpDangers = mongoose.model(
  "warpDangers",
  warpDangersSchema,
  "warpDangers"
);

