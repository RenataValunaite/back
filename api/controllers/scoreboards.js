const ScoreboardsSchema = require("../models/scoreboardsModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const scoreboard = new ScoreboardsSchema({
    name: req.body.name,
    dateCreated: new Date(),
    results_ids: [],
    scoreDirection: req.body.scoreDirection,
  });

  scoreboard.save().then((result) => {
    return res
      .status(200)
      .json({ response: "Scoreboard was created successfully" });
  });
};

module.exports.EDIT_SCOREBOARD_NAME = (req, res) => {
  ScoreboardsSchema.updateOne(
    { _id: req.params.id },
    { name: req.body.editedName }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Eddited successfully", editedName: result });
  });
};

module.exports.EDIT_SCOREBOARD_DIRECTION = async function (req, res) {
  const data = await ScoreboardsSchema.aggregate([
    {
      $lookup: {
        from: "results",
        localField: "resultIds",
        foreignField: "id",
        as: "scoreboard_results",
      },
    },
    { $match: { _id: ObjectId(req.params.id) } },
  ]).exec();

  console.log(data);

  return res.status(200).json({ scoreboards: data });
};

module.exports.GET_ALL_SCOREBOARDS = function (req, res) {
  ScoreboardsSchema.find()
    .sort("scoreboard")
    .then((results) => {
      return res.status(200).json({ scoreboards: results });
    });
};

module.exports.GET_SCOREBOARD = function (req, res) {
  ScoreboardsSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ scoreboards: results });
  });
};
