const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WarpPerilsSchema = new Schema({
  roll: [Number],
  name: String,
  desc: String
});

module.exports = WarpPerils = mongoose.model(
  "warpPerils",
  WarpPerilsSchema,
  "warpPerils"
);
