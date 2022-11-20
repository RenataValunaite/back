const mongoose = require("mongoose");

const scoreboardsSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dateCreated: { type: Number, required: true, min: 6 },
  results_ids: { type: Array },
  scoreDirection: { type: Array },
});

module.exports = mongoose.model("Scoreboards", scoreboardsSchema);
