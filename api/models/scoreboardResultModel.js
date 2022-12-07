const mongoose = require("mongoose");

const scoreboardResultSchema = mongoose.Schema({
  scoreboard_id: { type: String },
  passTime: { type: String },
  points: { type: Number },
  title: { type: String },
});

module.exports = mongoose.model("ScoreboardResult", scoreboardResultSchema);
