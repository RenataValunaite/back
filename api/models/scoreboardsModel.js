const mongoose = require("mongoose");

const scoreboardsSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dateCreated: { type: Object, required: true },
  results_ids: { type: Number },
  scoreDirection: { type: String },
});

module.exports = mongoose.model("Scoreboards", scoreboardsSchema);
