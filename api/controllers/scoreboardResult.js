const ScoreboardResultSchema = require("../models/scoreboardResultModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCORE = function (req, res) {
  const scoreboardResult = new ScoreboardResultSchema({
    scoreboard_id: req.body.scoreboard_id,
    passTime: req.body.passTime,
    points: req.body.points,
    title: req.body.title,
  });

  scoreboardResult.save().then((scoreboardResult) => {
    return res
      .status(200)
      .json({ response: "Result was created successfully" });
  });

  ScoreboardResultSchema.updateOne(
    { _id: req.body.id },
    { $push: { scoreboardResult_ids: scoreboardResult._id.toString() } }
  ).exec();
};

module.exports.EDIT_TITLE = (req, res) => {
  ScoreboardResultSchema.updateOne(
    { _id: req.params.id },
    { title: req.body.editedTitle }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Eddited successfully", editedTitle: result });
  });
};

module.exports.GET_ALL_RESULTS = function (req, res) {
  ScoreboardResultSchema.find()
    .sort("scoreboardResult")
    .then((results) => {
      return res.status(200).json({ scoreboardResult: results });
    });
};

module.exports.GET_ALL_RESULTS_BY_SCOREBOARD_ID = function (req, res) {
  ScoreboardResultSchema.findOne({
    _id: req.params.id,
  }).then((results) => {
    return res.status(200).json({ scoreboardResults: results });
  });
};
