const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CriticalEffectsSchema = new Schema({
  roll: [Number],
  name: String,
  desc: String,
  effect: String,
  severity: String,
  keywords: [String]
});

module.exports = CriticalEffects = mongoose.model(
  "criticalEffects",
  CriticalEffectsSchema,
  "criticalEffects"
);
