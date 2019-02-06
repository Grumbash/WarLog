const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CriticalEffectSchema = new Schema({
  roll: [Number],
  name: String,
  desc: String,
  effect: String,
  severity: String,
  keywords: [String]
});

module.exports = CriticalEffect = mongoose.model(
  "criticalEffects",
  CriticalEffectSchema,
  "criticalEffects"
);
